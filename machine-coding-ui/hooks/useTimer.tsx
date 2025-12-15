import { useCallback, useEffect, useRef, useState } from "react";

export function useTimer(totalTime: number) {
	const [isRunning, setIsRunning] = useState(false);
	const [seconds, setSeconds] = useState(totalTime);
	const timerRef = useRef<number | NodeJS.Timeout>(null);

	const stop = useCallback(
		function stop() {
			if (!isRunning) return;

			timerRef.current && clearInterval(timerRef.current);
			setIsRunning(false);
			setSeconds(totalTime);
		},
		[isRunning, totalTime]
	);

	useEffect(() => {
		if (seconds <= 0) {
			stop();
		}
	}, [seconds, stop]);

	useEffect(() => {
		return () => {
			timerRef.current && clearInterval(timerRef.current);
		};
	}, []);

	function start() {
		if (isRunning) return;

		setIsRunning(true);
		timerRef.current = setInterval(() => {
			setSeconds((prev: number) => prev - 1);
		}, 1000);
	}

	return {
		start,
		stop,
		isRunning,
		seconds,
	};
}
