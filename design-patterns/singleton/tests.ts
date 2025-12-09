import { afterEach, describe, expect, it, vi } from "vitest";
import { TestableSingleton } from "./variants";

describe("TestableSingleton", () => {
	afterEach(() => {
		// Reset singleton instance after each test
		TestableSingleton.resetInstance();
	});

	it("should return the same instance", () => {
		const instance1 = TestableSingleton.getInstance();
		const instance2 = TestableSingleton.getInstance();

		expect(instance1).toBe(instance2);
	});

	it("should create new instance after reset", () => {
		const instance1 = TestableSingleton.getInstance();
		TestableSingleton.resetInstance();
		const instance2 = TestableSingleton.getInstance();

		expect(instance1).not.toBe(instance2);
	});
});

// Integration Testing with Dependency Injection
interface ILogger {
	log(message: string): void;
}

class Service {
	constructor(private logger: ILogger) {}

	doSomething(): void {
		this.logger.log("Service operation completed");
	}
}

// Test with mock
const mockLogger = { log: vi.fn() };
const service = new Service(mockLogger);
service.doSomething();
expect(mockLogger.log).toHaveBeenCalledWith("Service operation completed");
