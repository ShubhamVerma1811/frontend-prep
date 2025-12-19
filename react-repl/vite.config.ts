import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@ui": "@frontend-prep/ui",
			"@sd": "@frontend-prep/sd",
			"@utils": "@frontend-prep/utils",
		},
	},
});
