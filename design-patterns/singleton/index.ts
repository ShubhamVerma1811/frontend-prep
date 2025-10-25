export class Singleton {
	private static instance: Singleton = new Singleton();

	private constructor() {}

	public static get getInstance() {
		return Singleton.instance;
	}

	public resetInstance() {
		Singleton.instance = null as any;
	}
}
