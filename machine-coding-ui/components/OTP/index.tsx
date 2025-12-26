// TODO:: Controlled state implementation

import { mergeInitialPropsWithDefaultProps } from "@frontend-prep/utils";
import React, { useEffect, useRef, useState } from "react";

interface OTPProps {
	value: string[];
	length: number;
	inputMode?: "numeric" | "alphanumeric";
	mask?: boolean;
	disabled?: boolean;
	readOnly?: boolean;
	placeholder?: string;
	onChange?: (e: string[]) => void;
	onComplete?: () => void;
}

const DEFAULT_LENGTH = 6;

function OTP(props: OTPProps) {
	const defProps = mergeInitialPropsWithDefaultProps(props, {
		length: DEFAULT_LENGTH,
		value: Array.from({ length: DEFAULT_LENGTH }, () => ""),
		mask: false,
		inputMode: "numeric",
	});

	const {
		mask,
		inputMode,
		value,
		length: otpLength,
		disabled,
		readOnly,
		placeholder,
	} = defProps;

	const [digits, setDigits] = useState(value);
	const [activeInputId, setActiveId] = useState(0);
	const inputRefs = useRef<Array<HTMLInputElement>>([]);
	const controller = useRef(new AbortController());

	const isComplete = digits?.filter((d) => d !== "").length === otpLength;

	useEffect(() => {
		controller.current.abort();
		controller.current = new AbortController();

		window.addEventListener(
			"keydown",
			(e) => {
				const leaders = [e.shiftKey, e.metaKey, e.ctrlKey];
				switch (e.key) {
					case "ArrowRight": {
						if (leaders.every((i) => i === false)) setActiveId((p) => p + 1);
						return;
					}
					case "ArrowLeft": {
						if (leaders.every((i) => i === false)) setActiveId((p) => p - 1);
						return;
					}
					case "Home": {
						if (leaders.every((i) => i === false)) setActiveId(0);
						return;
					}
					case "End": {
						if (leaders.every((i) => i === false)) setActiveId(otpLength - 1);
						return;
					}
				}
			},
			{
				signal: controller.current.signal,
			}
		);

		return () => {
			controller.current.abort();
		};
	}, []);

	useEffect(() => {
		inputRefs?.current?.[activeInputId]?.focus();
	}, [activeInputId]);

	useEffect(() => {
		if (isComplete) defProps?.onComplete?.();
	}, [isComplete, defProps?.onComplete]);

	const handleOnChange = React.useCallback(
		function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
			const value = e.target.value;
			const inputId = +(e.target.dataset.inputId as string);

			if (inputMode === "numeric" && isNaN(+value)) return;
			defProps?.onChange?.(digits);
			setDigits((p) => {
				const newDigits = [...p];
				newDigits[inputId] = value.slice(-1) || "";
				return newDigits;
			});
			setActiveId((p) => (p + 1 < otpLength ? p + 1 : p));
		},
		[inputMode]
	);

	const handleOnClick = React.useCallback(function handleOnClick(
		e: React.MouseEvent<HTMLInputElement>
	) {
		// @ts-expect-error missing types errpr
		const inputId = +e.target.dataset.inputId;
		inputRefs?.current?.[inputId]?.setSelectionRange(0, 1);
		setActiveId(inputId);
	}, []);

	const handleKeyDown = React.useCallback(function handleKeyDown(
		e: React.KeyboardEvent<HTMLInputElement>
	) {
		// @ts-expect-error missing types errpr
		const inputId = +e.target.dataset.inputId;
		if (e.key === "Backspace") {
			e.preventDefault();
			// @ts-expect-error typing issue maybe
			if (e.target.value) {
				setDigits((p) => {
					const x = [...p];
					x[inputId] = "";
					return x;
				});
			} else {
				setActiveId((p) => (p - 1 > -1 ? p - 1 : p));
			}
		} else if (e.key === "Delete") {
			e.preventDefault();
			// @ts-expect-error typing issue maybe
			if (e.target.value) {
				setDigits((p) => {
					const x = [...p];
					x[inputId] = "";
					return x;
				});
			}
		}
	}, []);

	const handlePaste = React.useCallback(function handlePasteCapture(
		e: React.ClipboardEvent<HTMLInputElement>
	) {
		e.preventDefault();
		const data = e.clipboardData.getData("text").split("").slice(0, otpLength);
		setDigits(data);
	}, []);

	return (
		<React.Fragment>
			<fieldset
				aria-labelledby="otp_input"
				className="flex w-full max-w-full flex-row items-center justify-center gap-1 sm:gap-2"
			>
				{Array(otpLength)
					?.fill("")
					?.map?.((_, idx) => {
						return (
							<label
								aria-label={`Input ${idx + 1} of ${otpLength}`}
								key={idx}
								className="min-w-0 max-w-[80px] flex-1 sm:max-w-[100px]"
							>
								<input
									ref={(ref) => {
										if (ref) inputRefs.current[idx] = ref;
									}}
									value={digits[idx]}
									placeholder={placeholder}
									autoComplete="one-time-code"
									disabled={disabled}
									readOnly={readOnly}
									type={mask ? "password" : "text"}
									className="aspect-square w-full rounded-full border text-center text-lg outline-blue-500 outline-offset-2 focus:outline-4 disabled:border-gray-300 disabled:bg-gray-100 sm:text-2xl md:text-3xl"
									inputMode={inputMode === "numeric" ? "numeric" : "text"}
									// maxLength={1} // this wont work, cursor wont jump if input is already populated, unless you have to write for JS for that
									data-input-id={idx}
									onChange={handleOnChange}
									onClick={handleOnClick}
									onKeyDown={handleKeyDown}
									onPaste={handlePaste}
								/>
							</label>
						);
					})}
			</fieldset>
		</React.Fragment>
	);
}

export default function OTPDemo() {
	return (
		<>
			<OTPDemoNumeric />
			<OTPDemoAlphaNumeric />
			<OTPDemoWithMask />
		</>
	);
}

function OTPDemoNumeric() {
	const [value, setValue] = useState(Array.from({ length: 6 }, () => ""));
	const [readonly, _setReadonly] = useState(false);
	const [disabled, _setDisabled] = useState(false);
	return (
		<div>
			<p className="text-center font-bold text-2xl">OTP Numeric Demo</p>
			<div className="box-border flex w-full max-w-full p-4 sm:p-6 md:p-8">
				<div className="w-full max-w-full">
					<OTP
						// mask
						length={value.length}
						inputMode="numeric"
						disabled={disabled}
						readOnly={readonly}
						onComplete={() => {}}
						value={value}
						onChange={(value) => {
							setValue(value);
						}}
					/>
				</div>
			</div>
		</div>
	);
}

function OTPDemoAlphaNumeric() {
	const [value, setValue] = useState(Array.from({ length: 6 }, () => ""));
	const [readonly, _setReadonly] = useState(false);
	const [disabled, _setDisabled] = useState(false);
	return (
		<div>
			<p className="text-center font-bold text-2xl">OTP Alphanumeric</p>
			<div className="box-border flex w-full max-w-full p-4 sm:p-6 md:p-8">
				<div className="w-full max-w-full">
					<OTP
						// mask
						length={value.length}
						inputMode="alphanumeric"
						disabled={disabled}
						readOnly={readonly}
						onComplete={() => {}}
						value={value}
						onChange={(value) => {
							setValue(value);
						}}
					/>
				</div>
			</div>
		</div>
	);
}

function OTPDemoWithMask() {
	const [value, setValue] = useState(Array.from({ length: 6 }, () => ""));
	const [readonly, _setReadonly] = useState(false);
	const [disabled, _setDisabled] = useState(false);
	return (
		<div>
			<p className="text-center font-bold text-2xl">OTP Alphanumeric</p>
			<div className="box-border flex w-full max-w-full p-4 sm:p-6 md:p-8">
				<div className="w-full max-w-full">
					<OTP
						mask
						length={value.length}
						inputMode="alphanumeric"
						disabled={disabled}
						readOnly={readonly}
						onComplete={() => {}}
						value={value}
						onChange={(value) => {
							setValue(value);
						}}
					/>
				</div>
			</div>
		</div>
	);
}
