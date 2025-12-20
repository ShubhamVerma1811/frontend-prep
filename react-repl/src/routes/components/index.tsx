import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/components/")({
	component: RouteComponent,
});

// 1) Grab default exports from every `machine-coding-ui/components/<Name>/index.tsx`
const components = import.meta.glob(
	"../../../../machine-coding-ui/components/*/*.tsx",
	{ import: "default", eager: true }
) as Record<string, () => Promise<React.ComponentType>>;

function getComponentNameFromModulePath(modulePath: string) {
	const match = modulePath.match(/\/components\/([^/]+)\/index\.tsx$/);
	return match?.[1];
}

export const componentLoaders = Object.fromEntries(
	Object.entries(components)
		.map(([modulePath, loader]) => {
			const name = getComponentNameFromModulePath(modulePath);
			return name ? ([name, loader] as const) : null;
		})
		.filter(Boolean) as Array<
		readonly [string, () => Promise<React.ComponentType>]
	>
);

function RouteComponent() {
	return (
		<div className="container mx-auto flex flex-wrap justify-center gap-4">
			{Object.keys(componentLoaders).map((name) => (
				<div key={name}>
					<Link
						to={`/components/${name}`}
						className="text-xl font-bold hover:underline"
					>
						{name}
					</Link>
				</div>
			))}
		</div>
	);
}
