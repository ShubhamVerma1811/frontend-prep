import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const components = import.meta.glob(
	"../../../../machine-coding-ui/components/*/*.tsx",
	{ eager: false }
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
		// @ts-expect-error TODO:: fix thi
		const Page = component?.default;
		const README = (await readME?.())?.default || null;

		return { Page, README };
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
				<LocalTab
					component={<Page />}
					readme={
						<div className="prose max-w-none prose-headings:scroll-m-20 prose-code:rounded-sm prose-headings:font-secondary prose-a:text-skin-accent prose-code:text-skin-secondary prose-em:text-skin-secondary prose-headings:text-skin-secondary prose-li:text-skin-secondary prose-strong:text-skin-secondary text-lg text-skin-secondary">
							{README && <ReactMarkdown>{README}</ReactMarkdown>}
						</div>
					}
				>
					{/*<Page />*/}
				</LocalTab>
			</React.Fragment>
		);
	}

	return <div>Component Not Found</div>;
}

function LocalTab({ component, readme }) {
	const [activePane, setActivePane] = useState<"component" | "readme">(
		"component"
	);

	let content;
	if (activePane === "component") content = component;
	if (activePane === "readme") content = readme;

	return (
		<div className="container mx-auto">
			<div className="flex flex-row items-center gap-2">
				<button
					className={`cursor-pointer font-semibold text-lg underline-offset-4 hover:underline ${activePane === "component" && "text-blue-500"}`}
					type="button"
					onClick={() => setActivePane("component")}
				>
					Demo
				</button>
				<button
					className={`cursor-pointer font-semibold text-lg underline-offset-4 hover:underline ${activePane === "readme" && "text-blue-500"}`}
					type="button"
					onClick={() => setActivePane("readme")}
				>
					README
				</button>
			</div>

			{content}
		</div>
	);
}
