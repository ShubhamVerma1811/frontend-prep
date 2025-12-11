export class EagerSingleton {
	private static instance = new EagerSingleton();

	private constructor() {}

	public static getInstance() {
		return EagerSingleton.instance;
	}
}

export class TestableSingleton {
	private static instance: TestableSingleton | null = null;

	private constructor() {}

	public static getInstance() {
		if (!TestableSingleton.instance) {
			TestableSingleton.instance = new TestableSingleton();
		}

		return TestableSingleton.instance;
	}

	static resetInstance(): void {
		TestableSingleton.instance = null;
	}
}
