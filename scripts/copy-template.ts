// TODO:: generic src and dest path
import * as fs from "node:fs";
import * as path from "node:path";
import config from "../prep.config.json";

const topics = config["machine-coding-topics"];
const args = process.argv.slice(2);
const dayArg = args.find((a) => a.startsWith("--day"));

let day = dayArg
	? dayArg.replace("--day", "day").replace("=", "")
	: `day${topics.day}`;

if (args.length < 1) {
	console.error("Please provide the filename to copy.");
	process.exit(1);
}

const filename = args[0];
const src = path.join(filename);
const dest = path.join("machine-coding-topics", day);
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
