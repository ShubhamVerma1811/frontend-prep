import * as fs from "node:fs";
import config from "../prep.config.json";

const args = process.argv.slice(2);

const topic = args.find((arg) => arg.startsWith("--type="));
const [type, value] = typeof topic !== "undefined" ? topic.split("=") : [];

if (!type) {
	console.error("Missing --type argument");
	process.exit(1);
}

if (!value) {
	console.error("Missing value for --type argument");
	process.exit(1);
}

switch (value) {
	case "topic":
		config["machine-coding-topics"].day++;
		break;
	case "design-patterns":
		config["design-patterns"].day++;
		break;
	default:
		console.error(`Unknown type: ${type}`);
		process.exit(1);
}

fs.writeFileSync(
	`${process.cwd()}/prep.config.json`,
	JSON.stringify(config, null, 2)
);
