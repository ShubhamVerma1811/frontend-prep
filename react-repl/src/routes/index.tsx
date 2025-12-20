import { BookMyShow } from "@frontend-prep/sd/bookmyshow";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<React.Fragment>
			<BookMyShow />
		</React.Fragment>
	);
}
