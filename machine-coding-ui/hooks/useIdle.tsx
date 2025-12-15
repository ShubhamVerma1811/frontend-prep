import { useCallback, useEffect, useRef, useState } from "react";

export function useIdle(wait: number) {
	const [idle, setIsIdle] = useState(false);
	const timerRef = useRef<NodeJS.Timeout>(void 0);

	const listener = useCallback(
		function listener() {
			clearTimeout(timerRef.current);
			setIsIdle(false);
			timerRef.current = setTimeout(() => {
				setIsIdle(true);
			}, wait);
		},
		[wait]
	);

	useEffect(() => {
		window.addEventListener("mousemove", listener);

		return () => {
			window.removeEventListener("mousemove", listener);
		};
	});

	return idle;
}
