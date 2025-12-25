import { createFileRoute } from "@tanstack/react-router";
import React from "react";

const components = import.meta.glob(
	"../../../../machine-coding-ui/components/*/*.tsx",
	{ eager: false }
) as Record<string, () => Promise<React.ComponentType>>;

export const Route = createFileRoute("/components/$component")({
	component: RouteComponent,
	loader: async ({ params }) => {
		const component = await getComponent(params.component);
		// @ts-expect-error TODO:: fix thi
		const Page = component?.default;
		return { Page };
	},
});

async function getComponent(componentName: string) {
	const path = `../../../../machine-coding-ui/components/${componentName}/index.tsx`;

	if (path in components) {
		const mod = components[path];
		const loaded = await mod();
		return loaded;
	}
	return null;
}

function RouteComponent() {
	const { Page } = Route.useLoaderData();

	if (Page) {
		return (
			<React.Fragment>
				<Page />
			</React.Fragment>
		);
	}

	return <div>Component Not Found</div>;
}
