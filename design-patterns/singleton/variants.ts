export class EagerSingleton {
	private static instance = new EagerSingleton();

	private constructor() {}

	public static getInstance() {
		return EagerSingleton.instance;
	}
}

export class TestableSingleton {
	private static instance: TestableSingleton | null = new TestableSingleton();

	private constructor() {}

	public static getInstance() {
		return TestableSingleton.instance;
	}

	public static resetInstance() {
		TestableSingleton.instance = null;
	}
}
