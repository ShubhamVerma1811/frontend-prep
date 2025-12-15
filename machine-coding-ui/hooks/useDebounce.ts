import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, wait: number) => {
	const [debouncedValue, setDebouncedValue] = useState<T>();

	useEffect(() => {
		const id = setTimeout(() => {
			setDebouncedValue(value);
		}, wait);

		return () => {
			clearTimeout(id);
		};
	}, [value, wait]);

	return debouncedValue;
};
