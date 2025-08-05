export class Singleton {
	private static instance: Singleton;

	private constructor() {}

	public static get getInstance() {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}

		return Singleton.instance;
	}
}
