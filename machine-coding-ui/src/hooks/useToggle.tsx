import { useCallback, useState } from "react";

export function useToggle(def: boolean) {
	const [on, setOn] = useState(def);

	const toggle = useCallback(function toggle(v?: boolean) {
		if (typeof v === "boolean") {
			setOn(v);
			return;
		}

		setOn((p) => !p);
	}, []);

	return {
		on,
		toggle,
	};
}
