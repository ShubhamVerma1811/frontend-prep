export class Singleton {
	private static instance: Singleton | null = null;

	private constructor() {}

	// this is lazy initilization
	public static get getInstance() {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}
		return Singleton.instance;
	}

	public resetInstance() {
		Singleton.instance = null;
	}
}
