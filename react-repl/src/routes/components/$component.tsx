import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import ReactMarkdown from "react-markdown";

// Add { eager: false } - CRITICAL for dynamic loading
const components = import.meta.glob(
	"../../../../machine-coding-ui/components/*/*.tsx",
	{ eager: false } // Returns functions that return promises
) as Record<string, () => Promise<React.ComponentType>>;

const readme = import.meta.glob(
	"../../../../machine-coding-ui/components/*/README.md",
	{ query: "?raw" }
) as Record<string, () => Promise<string>>;

export const Route = createFileRoute("/components/$component")({
	component: RouteComponent,
	loader: async ({ params }) => {
		const component = await getComponent(params.component);
		const readME = await getComponentReadme(params.component);
		// @ts-ignore TODO:: fix thi
		const Page = component?.default;
		const README = (await readME?.())?.default || null;

		return { Page, README };
	},
});

async function getComponent(componentName: string) {
	const path = `../../../../machine-coding-ui/components/${componentName}/index.tsx`;

	// Check if path exists in glob keys FIRST
	if (path in components) {
		const mod = components[path]; // This is a function
		const loaded = await mod(); // Call it to get promise
		return loaded;
	}
	return null;
}

async function getComponentReadme(componentName: string) {
	const path = `../../../../machine-coding-ui/components/${componentName}/README.md`;

	// Check if path exists in glob keys FIRST
	if (path in readme) {
		return readme[path];
	}
	return null;
}

function RouteComponent() {
	const { Page, README } = Route.useLoaderData();

	if (Page) {
		return (
			<React.Fragment>
				<Page />
				<div className="prose max-w-none text-lg text-skin-secondary prose-headings:scroll-m-20 prose-headings:font-secondary prose-headings:text-skin-secondary prose-a:text-skin-accent prose-strong:text-skin-secondary prose-em:text-skin-secondary prose-code:rounded-sm prose-code:text-skin-secondary prose-li:text-skin-secondary">
					{README && <ReactMarkdown>{README}</ReactMarkdown>}
				</div>
			</React.Fragment>
		);
	}
	return <div>Not found</div>;
}
