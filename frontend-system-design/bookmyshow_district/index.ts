// Package entrypoint for the BookMyShow "workspace module".
// Consumers should import from: `@frontend-prep/bookmyshow` (once `package.json` is set up accordingly).
export { BookMyShow } from "./src/index";

// Optional: re-export types if you want consumers to type against them.
// (Uncomment if/when you intentionally support these as part of the public API.)
// export type { Area, Row, Seat } from "./src/services/seating";
