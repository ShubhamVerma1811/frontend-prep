// TODO:: generic src and dest path
import * as fs from "node:fs";
import * as path from "node:path";

const args = process.argv.slice(2);

if (args.length < 1) {
	console.error("Please provide the filename to copy.");
	process.exit(1);
}

const filename = args[0];
const src = path.join(filename);
const dest = path.join("machine-coding-topics");
const destFileName = filename
	.replace(".template", "")
	.replace("templates/", "");

if (!fs.existsSync(dest)) {
	fs.mkdirSync(dest);
}

fs.writeFileSync(
	path.join(dest, destFileName),
	fs
		.readFileSync(src, "utf8")
		.replace(/export default {};/g, "")
		.trim()
);

console.log(`Created "${destFileName}" in "${dest}" folder from template.`);
