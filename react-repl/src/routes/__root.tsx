import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import React from "react";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<React.Fragment>
			<Header />
			<div className="m-5">
				<Outlet />
			</div>
		</React.Fragment>
	);
}

function Header() {
	return (
		<header>
			<nav className="my-2 flex flex-row items-center justify-center gap-2 font-medium text-xl">
				<Link className="underline-offset-4 hover:underline" to="/">
					Home
				</Link>
				<Link className="underline-offset-4 hover:underline" to="/components">
					Components
				</Link>
			</nav>
		</header>
	);
}
