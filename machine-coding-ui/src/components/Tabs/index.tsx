import React, {
	useCallback,
	useContext,
	useState,
	useEffect,
	useRef,
} from "react";

interface UseControllableStateProps<T> {
	value?: T;
	defaultValue: T;
	onChange?: (value: T) => void;
}

function useControllableState<T>(
	props: UseControllableStateProps<T>
): [T, (next: T | ((prev: T) => T)) => void, boolean] {
	const { value: valueProp, defaultValue, onChange: onChangeProp } = props;

	// Track if we're hydrated to prevent mismatches
	const [isHydrated, setIsHydrated] = useState(false);
	const [internalState, setInternalState] = useState(defaultValue);

	// Mark as hydrated after first render
	useEffect(() => {
		setIsHydrated(true);
	}, []);

	const isControlled = typeof valueProp !== "undefined";
	const value = isControlled ? valueProp : internalState;

	const onChange = useCallback(
		(next: T | ((prev: T) => T)) => {
			const res =
				typeof next === "function" ? (next as (prev: T) => T)(value) : next;

			if (onChangeProp) {
				onChangeProp(res);
			}

			if (!isControlled) {
				setInternalState(res);
			}
		},
		[onChangeProp, value, isControlled]
	);

	return [value, onChange, isHydrated];
}

interface IUITabsContext {
	activeTabValue: number;
	handleTabChange: (int: number) => void;
	isHydrated: boolean;
}

const TabsContext = React.createContext<IUITabsContext | null>(null);

interface TabsProviderProps {
	children: React.ReactNode;
	value?: number;
	defaultValue?: number;
	onChange?: (value: number) => void;
}

function TabsProvider({
	children,
	value,
	defaultValue = 0, // Use 0 instead of -1 for better  predictability
	onChange,
}: TabsProviderProps) {
	const [activeTabValue, setActiveTabValue, isHydrated] = useControllableState({
		value,
		defaultValue,
		onChange,
	});

	const handleTabChange = useCallback(
		(idx: number) => {
			// Only allow tab changes after hydration to prevent  issues
			if (isHydrated) {
				setActiveTabValue(idx);
			}
		},
		[setActiveTabValue, isHydrated]
	);

	const contextValue = {
		activeTabValue,
		handleTabChange,
		isHydrated,
	};

	return (
		<TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
	);
}

const useTabsContext = () => {
	const store = useContext(TabsContext);
	if (!store) {
		throw new Error("Tabs Context must be used within the TabsProviders");
	}
	return store;
};

const useTabs = () => {
	const store = useTabsContext();

	return {
		changeTab: store.handleTabChange,
		activeTabValue: store.activeTabValue,
		isHydrated: store.isHydrated,
	};
};

function Tabs({
	children,
	value,
	defaultValue = 0,
	onChange,
}: {
	children: React.ReactNode;
	value?: number;
	defaultValue?: number;
	onChange?: (value: number) => void;
}) {
	return (
		<TabsProvider value={value} onChange={onChange} defaultValue={defaultValue}>
			<div role="tablist">{children}</div>
		</TabsProvider>
	);
}

function TabItem({
	value,
	children,
	disabled = false,
}: {
	value: number;
	children: React.ReactNode;
	disabled?: boolean;
}) {
	const { activeTabValue, handleTabChange, isHydrated } = useTabsContext();
	const buttonRef = useRef<HTMLButtonElement>(null);

	const isActive = activeTabValue === value;

	const handleClick = useCallback(() => {
		if (!disabled && isHydrated) {
			handleTabChange(value);
		}
	}, [handleTabChange, value, disabled, isHydrated]);

	// Handle keyboard navigation after hydration
	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			if (!isHydrated) return;

			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				handleClick();
			}
		},
		[handleClick, isHydrated]
	);

	// Focus management after hydration
	useEffect(() => {
		if (isHydrated && isActive && buttonRef.current) {
			// Only focus if user navigated via keyboard
			const shouldFocus = document.activeElement?.tagName === "BUTTON";
			if (shouldFocus) {
				buttonRef.current.focus();
			}
		}
	}, [isActive, isHydrated]);

	return (
		<button
			ref={buttonRef}
			type="button"
			role="tab"
			aria-selected={isActive}
			aria-disabled={disabled}
			tabIndex={isActive ? 0 : -1}
			className={`px-4 py-2 transition-colors duration-200 ${
				disabled
					? "bg-gray-200 cursor-not-allowed text-gray-500"
					: isActive
						? "bg-blue-500 text-white"
						: "bg-gray-100 hover:bg-gray-200 text-gray-700"
			} ${!isHydrated ? "cursor-default" : "cursor-pointer"}`}
			disabled={disabled}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
		>
			{children}
		</button>
	);
}

function TabList({ children }: { children: React.ReactNode }) {
	return (
		<div
			className="flex flex-row gap-1 border-b border-gray-300"
			role="tablist"
		>
			{children}
		</div>
	);
}

function TabContent({
	value,
	children,
}: {
	children: React.ReactNode;
	value: number;
}) {
	const { activeTabValue, isHydrated } = useTabsContext();

	const isActive = activeTabValue === value;

	// Always render content on server, hide with CSS if not active
	// This prevents hydration mismatches
	return (
		<div
			role="tabpanel"
			aria-hidden={!isActive}
			className={`mt-4 ${!isActive ? "hidden" : ""}`}
			style={{
				// Fallback for when CSS classes don't load
				display: !isActive ? "none" : "block",
			}}
		>
			{children}
		</div>
	);
}

// Demo component showing -safe usage
export default function TabsDemo() {
	const [controlledValue, setControlledValue] = useState(0);
	const [isClient, setIsClient] = useState(false);

	// Track client-side rendering
	useEffect(() => {
		setIsClient(true);
	}, []);

	const cycleTab = useCallback(() => {
		setControlledValue((prev) => (prev + 1) % 3);
	}, []);

	return (
		<div className="p-6 space-y-8">
			<div>
				<h2 className="text-2xl font-bold mb-4">-Compatible Tabs</h2>
				<p className="text-gray-600 mb-6">
					These tabs work identically on server and client, preventing hydration
					mismatches.
				</p>
			</div>

			{/* Controlled Tabs */}
			<div>
				<h3 className="text-lg font-semibold mb-2">Controlled Mode</h3>
				<div className="mb-4">
					<button
						type="button"
						onClick={cycleTab}
						disabled={!isClient}
						className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300"
					>
						{isClient ? "Cycle Tab" : "Loading..."}
					</button>
					<span className="ml-2 text-sm text-gray-500">
						Active: {controlledValue}
					</span>
				</div>

				<Tabs
					value={controlledValue}
					onChange={setControlledValue}
					defaultValue={0}
				>
					<TabList>
						<TabItem value={0}>Home</TabItem>
						<TabItem value={1}>About</TabItem>
						<TabItem value={2} disabled>
							Contact
						</TabItem>
					</TabList>
					<TabContent value={0}>
						<h4 className="font-medium">Home Content</h4>
						<p>
							This is the home tab content. It renders consistently on server
							and client.
						</p>
					</TabContent>
					<TabContent value={1}>
						<h4 className="font-medium">About Content</h4>
						<p>This is the about tab content. No hydration mismatches here!</p>
					</TabContent>
					<TabContent value={2}>
						<h4 className="font-medium">Contact Content</h4>
						<p>This tab is disabled but content still renders for SEO.</p>
					</TabContent>
				</Tabs>
			</div>

			{/* Uncontrolled Tabs */}
			<div>
				<h3 className="text-lg font-semibold mb-2">Uncontrolled Mode</h3>
				<Tabs defaultValue={1}>
					<TabList>
						<TabItem value={0}>Features</TabItem>
						<TabItem value={1}>Pricing</TabItem>
						<TabItem value={2}>Support</TabItem>
					</TabList>
					<TabContent value={0}>
						<h4 className="font-medium">Features</h4>
						<ul className="list-disc list-inside mt-2">
							<li> Compatible</li>
							<li>Accessible</li>
							<li>Keyboard Navigation</li>
						</ul>
					</TabContent>
					<TabContent value={1}>
						<h4 className="font-medium">Pricing</h4>
						<p>Free and open source! No hydration issues included.</p>
					</TabContent>
					<TabContent value={2}>
						<h4 className="font-medium">Support</h4>
						<p>Works great with Next.js, Remix, and other frameworks.</p>
					</TabContent>
				</Tabs>
			</div>

			{/* Debug Info */}
			<div className="text-xs text-gray-500 border-t pt-4">
				<p>Client-side: {isClient ? "✅ Hydrated" : "❌ Server-side"}</p>
			</div>
		</div>
	);
}
