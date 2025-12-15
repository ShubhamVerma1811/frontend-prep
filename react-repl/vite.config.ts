import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@/utils": fileURLToPath(new URL("../utils", import.meta.url)),
			"@/ui": fileURLToPath(new URL("../machine-coding-ui", import.meta.url)),
			"@/sd": fileURLToPath(
				new URL("../frontend-system-design", import.meta.url)
			),
		},
	},
});
