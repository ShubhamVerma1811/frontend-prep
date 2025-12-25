import { createFileRoute, Link } from "@tanstack/react-router";
import type React from "react";

export const Route = createFileRoute("/components/")({
	component: RouteComponent,
});

const components = import.meta.glob(
	"../../../../machine-coding-ui/components/*/*.tsx",
	{ import: "default", eager: true }
) as Record<string, () => Promise<React.ComponentType>>;

function getComponentNameFromModulePath(modulePath: string) {
	const match = modulePath.match(/\/components\/([^/]+)\/index\.tsx$/);
	return match?.[1];
}

function RouteComponent() {
	return (
		<div className="container mx-auto">
			<p>List of avaialble components</p>
			<div>
				{Object.keys(components).map((name) => (
					<div key={name}>
						<Link
							to={`/components/${name}`}
							className="font-bold text-xl hover:underline"
						>
							{getComponentNameFromModulePath(name)}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
