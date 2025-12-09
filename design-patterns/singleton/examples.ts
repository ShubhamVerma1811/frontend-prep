import { appendFile } from "node:fs";
import path from "node:path";

interface ILoggerService {
	log(level: LOGLEVEL, message: string): void;
}

enum LOGLEVEL {
	INFO = "INFO",
	WARN = "WARN",
	ERROR = "ERROR",
}

interface Log {
	level: LOGLEVEL;
	message: string;
}

export class Logger {
	private services: Array<ILoggerService> = [];
	private static instance = new Logger();
	private history: Array<Log> = [];

	private constructor() {}

	public addService(service: ILoggerService) {
		this.services.push(service);
	}

	public static getInstance() {
		return Logger.instance;
	}

	public log(level: LOGLEVEL, message: string) {
		this.history.push({ level, message });
		for (const service of this.services) {
			service.log(level, message);
		}
	}

	public getHistory() {
		return [...this.history];
	}
}

class ConsoleLogger implements ILoggerService {
	log(level: LOGLEVEL, message: string): void {
		switch (level) {
			case LOGLEVEL.WARN: {
				this.warnLog(message);
				return;
			}
			case LOGLEVEL.INFO: {
				this.infoLog(message);
				return;
			}
			case LOGLEVEL.ERROR: {
				this.errorLog(message);
				return;
			}
		}
	}

	private warnLog(message: string) {
		console.warn(message);
	}

	private infoLog(message: string) {
		console.info(message);
	}

	private errorLog(message: string) {
		console.error(message);
	}
}

class FileLogger implements ILoggerService {
	log(level: LOGLEVEL, message: string): void {
		const timeStamp = new Date().toISOString();
		appendFile(
			path.join(__dirname, "logger.log"),
			`[${timeStamp}] [${level}] - ${message}\n`,
			(err) => {
				if (err) console.error(err);
			}
		);
	}
}

const logger = Logger.getInstance();
logger.addService(new ConsoleLogger());
logger.addService(new FileLogger());

logger.log(LOGLEVEL.WARN, "HEY WARN");
logger.log(LOGLEVEL.INFO, "HEY INFO");
logger.log(LOGLEVEL.ERROR, "HEY ERROR");

// works because of same insstance.
const log2 = Logger.getInstance();
console.log(log2.getHistory(), logger.getHistory());
