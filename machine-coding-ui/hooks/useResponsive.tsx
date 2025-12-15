import { useCallback, useEffect, useState } from "react";

export function useResponsive() {
	const [device, setDevice] = useState({
		isMobile: false,
		isTablet: false,
		isDesktop: false,
	});

	const listener = useCallback(function listener() {
		setDevice({
			isMobile: window.innerWidth < 768,
			isTablet: window.innerWidth > 768 && window.innerWidth < 990,
			isDesktop: window.innerWidth > 990,
		});
	}, []);

	useEffect(() => {
		listener();
		window.addEventListener("resize", listener);

		return () => {
			window.removeEventListener("resize", listener);
		};
	}, [listener]);

	return device;
}
