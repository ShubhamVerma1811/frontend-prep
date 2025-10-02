#!/usr/bin/env node

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

interface ComponentInfo {
	name: string;
	title: string;
	difficulty: string;
	description: string;
	folderPath: string;
}

/**
 * Extract component information from README file
 */
async function extractComponentInfo(
	componentPath: string,
	componentName: string
): Promise<ComponentInfo | null> {
	try {
		const readmePath = join(componentPath, "README.md");
		const readmeContent = await readFile(readmePath, "utf-8");

		// Extract title (first line after #)
		const titleMatch = readmeContent.match(/^#\s+(.+?)$/m);
		const title = titleMatch
			? titleMatch[1].replace(" - Frontend Interview Requirements", "")
			: componentName;

		// Extract difficulty badge
		const difficultyMatch = readmeContent.match(/!\[Difficulty:\s*(\w+)\]/);
		const difficulty = difficultyMatch ? difficultyMatch[1] : "Unknown";

		// Extract description (first paragraph under Component Overview)
		const overviewMatch = readmeContent.match(
			/## 📋 Component Overview\s*\n\s*(.+?)(?:\n\n|\n##)/s
		);
		const description = overviewMatch
			? overviewMatch[1].trim().split("\n")[0]
			: "No description available";

		return {
			name: componentName,
			title,
			difficulty,
			description,
			folderPath: componentPath,
		};
	} catch (error) {
		console.warn(`Warning: Could not read README for ${componentName}:`, error);
		return {
			name: componentName,
			title: componentName,
			difficulty: "Unknown",
			description: "Component without README documentation",
			folderPath: componentPath,
		};
	}
}

/**
 * Scan UI components directory and extract component information
 */
async function scanUIComponents(): Promise<ComponentInfo[]> {
	const uiComponentsPath = resolve(
		process.cwd(),
		"machine-coding-ui",
		"src",
		"components"
	);
	const components: ComponentInfo[] = [];

	try {
		const entries = await readdir(uiComponentsPath, { withFileTypes: true });

		for (const entry of entries) {
			if (entry.isDirectory()) {
				// Skip template and guide files
				if (entry.name.startsWith("README_")) {
					continue;
				}

				const componentPath = join(uiComponentsPath, entry.name);
				const componentInfo = await extractComponentInfo(
					componentPath,
					entry.name
				);

				if (componentInfo) {
					components.push(componentInfo);
				}
			}
		}

		// Sort components alphabetically by name
		return components.sort((a, b) => a.name.localeCompare(b.name));
	} catch (error) {
		console.error("Error scanning UI components:", error);
		return [];
	}
}

/**
 * Generate the UI Components section for README
 */
function generateUIComponentsSection(components: ComponentInfo[]): string {
	if (components.length === 0) {
		return "#### UI Components\n\nNo components found.\n";
	}

	const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3, Unknown: 4 };
	const sortedComponents = components.sort((a, b) => {
		const diffA =
			difficultyOrder[a.difficulty as keyof typeof difficultyOrder] || 4;
		const diffB =
			difficultyOrder[b.difficulty as keyof typeof difficultyOrder] || 4;
		if (diffA !== diffB) return diffA - diffB;
		return a.name.localeCompare(b.name);
	});

	let section = "#### UI Components\n\n";
	section +=
		"Interactive React components commonly asked in frontend interviews:\n\n";

	for (const component of sortedComponents) {
		const difficultyBadge = `![${
			component.difficulty
		}](https://img.shields.io/badge/Difficulty-${
			component.difficulty
		}-${getDifficultyColor(component.difficulty)})`;
		section += `- **${component.title}** ${difficultyBadge}\n`;
		section += `  - ${component.description}\n`;
		section += `  - 📁 \`/ui/src/components/${component.name}/\`\n\n`;
	}

	return section;
}

/**
 * Get color for difficulty badge
 */
function getDifficultyColor(difficulty: string): string {
	switch (difficulty.toLowerCase()) {
		case "easy":
			return "green";
		case "medium":
			return "yellow";
		case "hard":
			return "red";
		default:
			return "lightgrey";
	}
}

/**
 * Update the root README file
 */
async function updateRootReadme(components: ComponentInfo[]): Promise<void> {
	const readmePath = resolve(process.cwd(), "README.md");

	try {
		let readmeContent = await readFile(readmePath, "utf-8");

		// Generate new UI components section
		const newUISection = generateUIComponentsSection(components);

		// Find and replace the UI section
		const uiSectionRegex =
			/### `\/ui` - React \+ TypeScript Application[\s\S]*?(?=\n## |\n### |$)/;

		const newUIFullSection = `### \`/machine-coding-ui\` - React + TypeScript Application

Modern React application built with:

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Biome** for linting and formatting
- **Vitest** for testing

${newUISection}`;

		if (uiSectionRegex.test(readmeContent)) {
			readmeContent = readmeContent.replace(uiSectionRegex, newUIFullSection);
		} else {
			// If section doesn't exist, append it after the repository structure
			const structureEndRegex = /(## 📁 Repository Structure[\s\S]*?)(\n## )/;
			if (structureEndRegex.test(readmeContent)) {
				readmeContent = readmeContent.replace(
					structureEndRegex,
					`$1\n${newUIFullSection}\n$2`
				);
			} else {
				// Fallback: append at the end
				readmeContent += `\n\n${newUIFullSection}\n`;
			}
		}

		await writeFile(readmePath, readmeContent, "utf-8");
		console.log("✅ Root README updated successfully!");
		console.log(`📊 Found and documented ${components.length} UI components:`);

		for (const component of components) {
			console.log(`   • ${component.title} (${component.difficulty})`);
		}
	} catch (error) {
		console.error("❌ Error updating root README:", error);
		process.exit(1);
	}
}

/**
 * Main function
 */
async function main(): Promise<void> {
	console.log("🔍 Scanning UI components...");

	const components = await scanUIComponents();

	if (components.length === 0) {
		console.log("⚠️  No UI components found.");
		return;
	}

	console.log(`📋 Found ${components.length} components. Updating README...`);
	await updateRootReadme(components);
}

// Run the script
if (require.main === module) {
	main().catch((error) => {
		console.error("💥 Script failed:", error);
		process.exit(1);
	});
}

export { scanUIComponents, updateRootReadme, extractComponentInfo };
