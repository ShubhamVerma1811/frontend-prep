import { createRootRoute, Outlet } from "@tanstack/react-router";
import React from "react";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<React.Fragment>
			<div className="m-5">
				<Outlet />
			</div>
		</React.Fragment>
	);
}
