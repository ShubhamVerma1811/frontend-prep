import { createRouter, RouterProvider } from "@tanstack/react-router";
import "./index.css";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

export default function App() {
	return <RouterProvider router={router} />;
}
