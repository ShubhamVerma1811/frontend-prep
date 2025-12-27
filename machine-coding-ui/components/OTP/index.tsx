import { mergeInitialPropsWithDefaultProps } from "@frontend-prep/utils";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface OTPProps {
	value?: string[];
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

const OTP = React.memo(function OTP(props: OTPProps) {
	const defProps = mergeInitialPropsWithDefaultProps(props, {
		length: DEFAULT_LENGTH,
		mask: false,
		inputMode: "numeric",
	});

	const {
		mask,
		inputMode,
		value: valueProp,
		length: otpLength,
		disabled,
		readOnly,
		placeholder,
		onChange,
		onComplete,
	} = defProps;

	const isControlled = valueProp !== undefined;
	const [internalDigits, setDigits] = useState(() =>
		isControlled ? valueProp : Array.from({ length: DEFAULT_LENGTH }, () => "")
	);
	const [activeInputId, setActiveId] = useState(0);
	const inputRefs = useRef<Array<HTMLInputElement>>([]);
	const controller = useRef(new AbortController());

	// single source of truth
	const digits = isControlled ? valueProp : internalDigits;

	const isComplete = digits?.filter((d) => d !== "").length === otpLength;

	useEffect(() => {
		controller.current.abort();
		controller.current = new AbortController();

		window.addEventListener(
			"keydown",
			(e) => {
				const hasModifiers = e.shiftKey || e.metaKey || e.ctrlKey;
				if (hasModifiers) return;

				switch (e.key) {
					case "ArrowRight": {
						setActiveId((p) => p + 1);
						return;
					}
					case "ArrowLeft": {
						setActiveId((p) => p - 1);
						return;
					}
					case "Home": {
						setActiveId(0);
						return;
					}
					case "End": {
						setActiveId(otpLength - 1);
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
	}, [otpLength]);

	useEffect(() => {
		inputRefs?.current?.[activeInputId]?.focus();
	}, [activeInputId]);

	useEffect(() => {
		if (isComplete) onComplete?.();
	}, [isComplete, onComplete]);

	const updateValue = useCallback(
		function updateValue(value: string[]) {
			if (isControlled) {
				onChange?.(value);
			} else {
				setDigits(value);
			}
		},
		[onChange, isControlled]
	);

	const handleOnChange = React.useCallback(
		function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
			const value = e.target.value;
			const inputId = +(e.target.dataset.inputId as string);

			if (inputMode === "numeric" && Number.isNaN(+value)) return;

			const newDigits = [...digits];
			newDigits[inputId] = value.slice(-1) || "";
			updateValue(newDigits);
			setActiveId((p) => (p + 1 < otpLength ? p + 1 : p));
		},
		[inputMode, otpLength, digits, updateValue]
	);

	const handleOnClick = React.useCallback(function handleOnClick(
		e: React.MouseEvent<HTMLInputElement>
	) {
		const inputId = Number(e.currentTarget.dataset.inputId);
		inputRefs?.current?.[inputId]?.setSelectionRange(0, 1);
		setActiveId(inputId);
	}, []);

	const handleKeyDown = React.useCallback(
		function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
			const inputId = Number(e.currentTarget.dataset.inputId);
			const value = e.currentTarget.value;
			if (e.key === "Backspace") {
				e.preventDefault();
				if (value) {
					const x = [...digits];
					x[inputId] = "";
					updateValue(x);
				} else {
					setActiveId((p) => (p - 1 > -1 ? p - 1 : p));
				}
			} else if (e.key === "Delete") {
				e.preventDefault();
				if (value) {
					const x = [...digits];
					x[inputId] = "";
					updateValue(x);
				}
			}
		},
		[digits, updateValue]
	);

	const handlePaste = React.useCallback(
		function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
			e.preventDefault();
			const data = e.clipboardData
				.getData("text")
				.split("")
				.slice(0, otpLength);
			updateValue(data);
		},
		[otpLength, updateValue]
	);

	return (
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
							className="min-w-0 max-w-20 flex-1 sm:max-w-25"
						>
							<input
								ref={(ref) => {
									if (ref) inputRefs.current[idx] = ref;
								}}
								value={digits[idx] || ""}
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
	);
});

const StateLessDemos: Array<{ name: string; props: OTPProps }> = [
	{
		name: "OTP Demo with Uncontrolled State",
		props: {
			length: 5,
			inputMode: "alphanumeric",
		},
	},
	{
		name: "OTP Demo with Mask",
		props: {
			mask: true,
			length: 5,
			inputMode: "alphanumeric",
		},
	},
	{
		name: "OTP Demo with Disabled State",
		props: {
			disabled: true,
			length: 5,
			value: ["1", "2", "3", "4", "5"],
			inputMode: "alphanumeric",
		},
	},
	{
		name: "OTP Demo with Readonly State",
		props: {
			readOnly: true,
			length: 5,
			value: ["1", "2", "3", "4", "5"],
			inputMode: "alphanumeric",
		},
	},
];

export default function OTPDemo() {
	return (
		<>
			{/*Stateful Demos*/}
			<OTPDemoNumeric />
			<OTPDemoWithComplete />
			{/*StateLess Demos*/}
			{StateLessDemos.map((demo) => {
				return (
					<div key={demo.name}>
						<p className="text-center font-bold text-xl">{demo.name}</p>
						<div className="box-border flex w-full max-w-full p-4 sm:p-6 md:p-8">
							<div className="w-full max-w-full">
								<OTP {...demo.props} />
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}

function OTPDemoNumeric() {
	const [value, setValue] = useState(Array.from({ length: 6 }, () => ""));
	const [readonly, _setReadonly] = useState(false);
	const [disabled, _setDisabled] = useState(false);

	return (
		<div>
			<p className="text-center font-bold text-xl">
				OTP Demo with onComplete callback
			</p>
			<p className="text-center">State:{value}</p>
			<div className="box-border flex w-full max-w-full p-4 sm:p-6 md:p-8">
				<div className="w-full max-w-full">
					<OTP
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

function OTPDemoWithComplete() {
	const [isComplete, setIsComplete] = useState(false);

	return (
		<div>
			<p className="text-center font-bold text-xl">
				OTP Demo with onComplete callback
			</p>
			<p className="text-center">
				Completed: {String(isComplete)},{" "}
				{isComplete
					? "Input disabled on completion."
					: "Inputs open for typing..."}
			</p>
			<div className="box-border flex w-full max-w-full p-4 sm:p-6 md:p-8">
				<div className="w-full max-w-full">
					<OTP
						length={4}
						disabled={isComplete}
						inputMode="numeric"
						onComplete={() => {
							setIsComplete(true);
						}}
					/>
				</div>
			</div>
		</div>
	);
}
