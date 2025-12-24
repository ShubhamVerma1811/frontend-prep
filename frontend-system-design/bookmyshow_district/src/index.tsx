import { generateUUID } from "@frontend-prep/utils";
import React, { useRef, useState } from "react";
import {
	type Area,
	type Row,
	type Seat,
	SeatStatus,
	seatMapBuilder,
} from "./services/seating";
import "./style.css";

export const BookMyShow = React.memo(function BookMyShow() {
	const layouts = seatMapBuilder();

	return (
		<div className="my-4 w-full font-['Be_Vietnam_Pro','Calibri']">
			<div>
				<p className="text-center font-bold text-lg">
					Dynamic Rendering of Seat Layout like{" "}
					<span className="text-[#eb4e62]">BookMyShow</span> and{" "}
					<span className="text-[#6e52fa]">District</span>
				</p>
				<p className="my-4 text-center font-bold text-gray-700">
					More details on{" "}
					<a
						href="https://github.com/ShubhamVerma1811/frontend-prep"
						className="underline"
					>
						github.com/ShubhamVerma1811/frontend-prep
					</a>
				</p>
			</div>

			<div className="px-4">
				<div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
					{layouts.map((areas, index) => (
						<SeatLayout key={generateUUID()} areas={areas} index={index} />
					))}
				</div>
			</div>
		</div>
	);
});

function SeatLayout({ areas, index }: { areas: Area[]; index: number }) {
	return (
		<ZoomableLayout title={`Layout ${index + 1}`}>
			{areas?.map((area) => (
				<AreaComp area={area} key={`0-${area.id}`} />
			))}
			<div className="my-10 flex justify-center">
				<img
					className="w-100"
					src="https://cdn.district.in/movies-web/_next/static/media/screen-img-light.b7b18ffd.png"
					alt="screen preview"
				/>
			</div>
		</ZoomableLayout>
	);
}

function AreaComp({ area }: { area: Area }) {
	const inrPrice = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "INR",
	}).format(area.price);
	return (
		<div key={generateUUID()}>
			<p className="my-3 text-center font-bold text-2xl">
				{area.name}: {inrPrice}
			</p>
			<div>
				{area?.rows?.map?.((row) => (
					<RowComp row={row} key={generateUUID()} />
				))}
			</div>
		</div>
	);
}

function RowComp({ row }: { row: Row }) {
	if (!row) return <div className="size-9" />;

	return (
		<div className="my-4 flex flex-row items-center" key={generateUUID()}>
			<div className="mr-1 flex size-9 items-center justify-center bg-white">
				<span className="w-10 text-center font-bold text-gray-500 text-xl">
					{row.name}
				</span>
			</div>
			<div className="flex flex-row gap-3">
				{row?.seats?.map((seat) => (
					<SeatComp key={generateUUID()} seat={seat} />
				))}
			</div>
		</div>
	);
}

const SeatWrapper = ({ children }: { children: React.ReactNode }) => {
	return <div className="size-9">{children}</div>;
};

function SeatComp({ seat }: { seat: Seat }) {
	const [selected, setSelected] = useState(false);

	switch (seat?.status) {
		case SeatStatus.AVAILABLE: {
			return (
				<SeatWrapper>
					<button
						type="button"
						onClick={() => setSelected((p) => !p)}
						className={`flex size-full items-center justify-center rounded-lg border ${selected ? "border-[#6e52fa] bg-[#6e52fa]" : ""}`}
					>
						<p
							className={`font-medium ${selected ? "text-white" : "text-black"}`}
						>
							{seat.name}
						</p>
					</button>
				</SeatWrapper>
			);
		}
		case SeatStatus.OCCUPIED: {
			return (
				<SeatWrapper>
					<div
						className={`flex size-full items-center justify-center rounded-lg border border-gray-400`}
					>
						<p className="text-gray-400">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1em"
								height="1em"
								viewBox="0 0 24 24"
							>
								<title>Seat unavailable</title>
								<path
									fill="currentColor"
									d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"
								/>
							</svg>
						</p>
					</div>
				</SeatWrapper>
			);
		}
		default:
			return (
				<SeatWrapper>
					<div className="invisible" />
				</SeatWrapper>
			);
	}
}

function clamp(n: number, min: number, max: number) {
	return Math.max(min, Math.min(max, n));
}

function ZoomableLayout({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	const containerRef = useRef<HTMLDivElement | null>(null);

	const [scale, setScale] = useState(1);

	const MIN_SCALE = 0.1;
	const MAX_SCALE = 2.5;
	const STEP = 0.05;
	const zoomOut = () => setScale((s) => clamp(s - STEP, MIN_SCALE, MAX_SCALE));

	const zoomIn = () => setScale((s) => clamp(s + STEP, MIN_SCALE, MAX_SCALE));
	const resetZoom = () => setScale(1);

	return (
		<div className="w-full">
			<div className="rounded-lg border border-gray-200 p-2">
				<div className="mb-2 flex items-center justify-between gap-2">
					<p className="text-center font-bold text-xl">{title}</p>

					<div className="flex items-center justify-end gap-2">
						<button
							type="button"
							onClick={zoomOut}
							className="rounded-md border border-gray-300 px-3 py-1 font-semibold text-sm"
							aria-label="Zoom out"
						>
							-
						</button>
						<button
							type="button"
							onClick={resetZoom}
							className="rounded-md border border-gray-300 px-3 py-1 font-semibold text-sm"
							aria-label="Reset zoom"
						>
							Reset
						</button>
						<button
							type="button"
							onClick={zoomIn}
							className="rounded-md border border-gray-300 px-3 py-1 font-semibold text-sm"
							aria-label="Zoom in"
						>
							+
						</button>
						<span className="w-12 text-right text-gray-500 text-xs">
							{Math.round(scale * 100)}%
						</span>
					</div>
				</div>

				<div
					ref={containerRef}
					className="max-h-[80vh] overflow-x-auto overflow-y-auto"
					style={{
						overscrollBehavior: "contain",
					}}
				>
					<div
						className="mx-auto w-max"
						style={{
							transform: `scale(${scale})`,
							transformOrigin: "top center",
						}}
					>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}
