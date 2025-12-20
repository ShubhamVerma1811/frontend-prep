import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import React from "react";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<React.Fragment>
			{/*<header>
				<nav>
					<Link to="/">Home</Link>
				</nav>
			</header>*/}
			<Outlet />
		</React.Fragment>
	);
}
