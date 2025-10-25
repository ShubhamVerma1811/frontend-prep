// Thread-Safe Singleton
export class ThreadSafeSingleton {
	private static instance: ThreadSafeSingleton;
	private static readonly lock = Symbol("lock");

	private constructor() {}

	static getInstance(): ThreadSafeSingleton {
		if (!ThreadSafeSingleton.instance) {
			// Simulate double-checked locking
			if (!ThreadSafeSingleton.instance) {
				ThreadSafeSingleton.instance = new ThreadSafeSingleton();
			}
		}
		return ThreadSafeSingleton.instance;
	}
}

// Testable Singleton
export class TestableSingleton {
	private static instance: TestableSingleton;

	private constructor() {}

	static getInstance(): TestableSingleton {
		if (!TestableSingleton.instance) {
			TestableSingleton.instance = new TestableSingleton();
		}
		return TestableSingleton.instance;
	}

	// For testing purposes
	static resetInstance(): void {
		TestableSingleton.instance = null as any;
	}
}

// Eager Initialization
export class EagerSingleton {
	private static readonly instance: EagerSingleton = new EagerSingleton();

	private constructor() {}

	static getInstance(): EagerSingleton {
		return EagerSingleton.instance;
	}
}
