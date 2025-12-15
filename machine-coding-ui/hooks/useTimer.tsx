import { useEffect, useRef, useState } from "react";

export function useTimer(totalTime: number) {
	const [isRunning, setIsRunning] = useState(false);
	const [seconds, setSeconds] = useState(totalTime);
	const timerRef = useRef<number | null>(null);

	useEffect(() => {
		if (seconds <= 0) {
			stop();
		}
	}, [seconds]);

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

	function stop() {
		if (!isRunning) return;

		timerRef.current && clearInterval(timerRef.current);
		setIsRunning(false);
		setSeconds(totalTime);
	}

	return {
		start,
		stop,
		isRunning,
		seconds,
	};
}
