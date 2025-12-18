import { generateUUID } from "@/utils/index";
import { useRef, useState } from "react";
import {
	seatMapBuilder,
	SeatStatus,
	type Area,
	type Row,
	type Seat,
} from "./services/seating";
import "./style.css";

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
			<div className="border border-gray-200 rounded-lg p-2">
				<div className="flex items-center justify-between gap-2 mb-2">
					<p className="text-center font-bold text-xl">{title}</p>

					<div className="flex items-center justify-end gap-2">
						<button
							type="button"
							onClick={zoomOut}
							className="px-3 py-1 border border-gray-300 rounded-md text-sm font-semibold"
							aria-label="Zoom out"
						>
							-
						</button>
						<button
							type="button"
							onClick={resetZoom}
							className="px-3 py-1 border border-gray-300 rounded-md text-sm font-semibold"
							aria-label="Reset zoom"
						>
							Reset
						</button>
						<button
							type="button"
							onClick={zoomIn}
							className="px-3 py-1 border border-gray-300 rounded-md text-sm font-semibold"
							aria-label="Zoom in"
						>
							+
						</button>
						<span className="text-xs text-gray-500 w-12 text-right">
							{Math.round(scale * 100)}%
						</span>
					</div>
				</div>

				<div
					ref={containerRef}
					className="overflow-x-auto overflow-y-auto max-h-[80vh]"
					style={{
						overscrollBehavior: "contain",
					}}
				>
					<div
						className="w-max mx-auto"
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

export const BookMyShow = () => {
	const layouts = seatMapBuilder();

	return (
		<div className="my-4 font-['Be_Vietnam_Pro'] w-full">
			<div>
				<p className="font-bold text-lg text-center">
					Dynamic Rendering of Seat Layout like{" "}
					<span className="text-[#eb4e62]">BookMyShow</span> and{" "}
					<span className="text-[#6e52fa]">District</span>
				</p>
				<p className="my-4 font-bold text-center text-gray-700">
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
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
					{layouts.map((areas, index) => (
						<SeatLayout key={generateUUID()} areas={areas} index={index} />
					))}
				</div>
			</div>
		</div>
	);
};

function SeatLayout({ areas, index }: { areas: Area[]; index: number }) {
	return (
		<ZoomableLayout title={`Layout ${index + 1}`}>
			{areas?.map((area) => (
				<AreaComp area={area} key={`0-${area.id}`} />
			))}
			<div className="flex justify-center my-10">
				<img
					className="w-100 "
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
			<p className="text-center font-bold my-3 text-2xl">
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
		<div className="flex flex-row items-center my-4" key={generateUUID()}>
			<div className="size-9 flex items-center justify-center mr-1 bg-white">
				<span className="font-bold text-center w-10  text-xl text-gray-500">
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
						className={`border size-full rounded-lg flex items-center justify-center ${selected ? "bg-[#6e52fa] border-[#6e52fa]" : ""}`}
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
						className={`border border-gray-400 size-full rounded-lg flex items-center justify-center`}
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
