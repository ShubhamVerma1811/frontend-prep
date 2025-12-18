export interface Layout {
	areas: Area[];
}

export interface Area {
	id: number;
	name: string;
	price: number;
	rows: Row[];
}

export interface Row {
	id: number;
	name: string;
	minId: number;
	maxId: number;
	colId: number;
	rowId: number;
	seats: Seat[];
}

export interface Seat {
	id: number;
	name: string;
	colId: number;
	rowId: number;
	status: SeatStatus;
}

export enum SeatStatus {
	AVAILABLE,
	OCCUPIED,
	GAP,
	BOOKED,
}

import api from "./seatMapping.json";

export function seatMapBuilder(): Area[][] {
	const areasArr = convertSeatingData(api);
	return areasArr.map(({ areas }) => {
		const data = areas.map((area) => {
			const rows: Array<Row> = Array.from({ length: area.rows.length });

			area.rows.forEach((row) => {
				rows[row.id] = row;
			});

			rows.forEach((row) => {
				if (row) {
					const seats: Array<Seat> = Array.from({ length: row.seats.length });

					row.seats.forEach((seat) => {
						seats[seat.colId] = seat;
					});

					row.seats = seats;
				}
			});

			return {
				...area,
				rows,
			};
		});

		return data;
	});
}

function convertSeatingData(apiResponseArray: typeof api): Layout[] {
	return apiResponseArray.map((apiResponse) => {
		const areas: Area[] = apiResponse.seatLayout.colAreas.objArea.map(
			(apiArea) => {
				const rows: Row[] = apiArea.objRow.map((apiRow) => {
					const seats: Seat[] = apiRow.objSeat.map((apiSeat) => {
						const status =
							apiSeat.SeatStatus === "0"
								? SeatStatus.AVAILABLE
								: apiSeat.SeatStatus === "1"
									? SeatStatus.OCCUPIED
									: SeatStatus.GAP;

						return {
							id: apiSeat.seatNumber,
							name: apiSeat.displaySeatNumber,
							colId: apiSeat.GridSeatNum,
							rowId: +apiRow.GridRowId,
							status: status,
						};
					});

					const seatNumbers = seats.map((s) => s.id);
					const minId = Math.min(...seatNumbers);
					const maxId = Math.max(...seatNumbers);

					return {
						id: +apiRow.GridRowId - 1,
						name: apiRow.PhyRowId,
						colId: +apiRow.GridRowId,
						rowId: +apiRow.GridRowId - 1,
						minId: minId,
						maxId: maxId,
						seats: seats,
					};
				});

				return {
					id: apiArea.AreaNum,
					name: apiArea.AreaDesc,
					price: apiArea.AreaPrice,
					rows: rows,
				};
			}
		);

		return { areas };
	});
}
