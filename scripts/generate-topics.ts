import * as fs from "node:fs";
import config from "../prep.config.json";

const topics = config["machine-coding-topics"];

topics.day++;

fs.writeFileSync(
	process.cwd() + "/prep.config.json",
	JSON.stringify(config, null, 2)
);
