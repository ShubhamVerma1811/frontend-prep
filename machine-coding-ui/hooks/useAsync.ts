import { useCallback, useEffect, useState } from "react";

type State = {
	state: "idle" | "pending" | "success" | "error";
	value: unknown;
	error: unknown;
};

export function useAsync(asyncFn: () => Promise<unknown>, immediate: boolean) {
	const [state, setState] = useState<State>({
		state: "idle",
		value: null,
		error: null,
	});

	const refetch = useCallback(
		function refetch() {
			setState((p) => ({
				...p,
				state: "pending",
			}));

			asyncFn()
				.then((data) => {
					setState((p) => ({
						...p,
						state: "success",
						value: data,
					}));
				})
				.catch((e) => {
					setState((p) => ({
						...p,
						state: "error",
						error: e,
					}));
				})
				.finally(() => {
					setState((p) => ({
						...p,
						state: "idle",
					}));
				});
		},
		[asyncFn]
	);

	useEffect(() => {
		if (immediate) {
			refetch();
		}
	}, [immediate, refetch]);

	return {
		...state,
		refetch,
	};
}
