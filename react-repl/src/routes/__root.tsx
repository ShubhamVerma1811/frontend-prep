import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import React from "react";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<React.Fragment>
			<header className="container mx-auto">
				<nav className="flex flex-row gap-2 items-center justify-center font-medium text-xl">
					<Link to="/" className="hover:underline">
						Home
					</Link>
					<Link to="/components" className="hover:underline">
						Components
					</Link>
				</nav>
			</header>
			<Outlet />
			<TanStackRouterDevtools />
		</React.Fragment>
	);
}
