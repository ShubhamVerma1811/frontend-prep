import React, { useCallback, useContext, useState } from "react";

interface UseControllableStateProps<T> {
	value?: T;
	defaultValue: T;
	onChange?: (value: T) => void;
}

function useControllableState<T>(
	props: UseControllableStateProps<T>
): [T, (next: T | ((prev: T) => T)) => void] {
	const { value: valueProp, defaultValue, onChange: onChangeProp } = props;

	const [internalState, setInternalState] = useState(defaultValue);

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

	return [value, onChange];
}

interface IUITabsContext {
	activeTabValue: number;
	handleTabChange: (int: number) => void;
}

// Create context for tabs state management
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
	defaultValue = -1,
	onChange,
}: TabsProviderProps) {
	// Use the controllable state hook
	const [activeTabValue, setActiveTabValue] = useControllableState({
		value,
		defaultValue,
		onChange,
	});

	// Handle tab changes
	const handleTabChange = (idx: number) => {
		setActiveTabValue(idx);
	};

	const contextValue = {
		activeTabValue,
		handleTabChange,
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
	};
};

function Tabs({
	children,
	value,
	defaultValue,
	onChange,
}: {
	children: React.ReactNode;
	value?: number;
	defaultValue?: number;
	onChange?: (value: number) => void;
}) {
	return (
		<TabsProvider value={value} onChange={onChange} defaultValue={defaultValue}>
			<div>{children}</div>
		</TabsProvider>
	);
}

function TabItem({
	value,
	children,
	disabled,
}: {
	value: number;
	children: React.ReactNode;
	disabled?: boolean;
}) {
	const { activeTabValue, handleTabChange } = useTabsContext();

	const handleClick = () => {
		handleTabChange(value);
	};

	return (
		<button
			type="button"
			className={`disabled:bg-gray-200 px-4 py-2 cursor-pointer disabled:cursor-crosshair ${
				activeTabValue === value ? "bg-blue-300" : "bg-red-300"
			}`}
			disabled={disabled}
			onClick={handleClick}
		>
			{children}
		</button>
	);
}

function TabList({ children }: { children: React.ReactNode }) {
	return <div className="flex flex-row gap-2 items-center">{children}</div>;
}

function TabContent({
	value,
	children,
}: {
	children: React.ReactNode;
	value: number;
}) {
	const { activeTabValue } = useTabsContext();

	if (activeTabValue !== value) return null;

	return <div>{children}</div>;
}

export default function TabsDemo() {
	// For controlled mode example - we can use setActiveTabValue to update tabs
	const [activeTabValue, setActiveTabValue] = useState(2);

	const cycleTab = () => {
		setActiveTabValue((p) => ((p + 1) % 3) + 1);
	};

	return (
		<>
			<h3>Controlled Tabs (activeTabValue from parent)</h3>
			<button
				type="button"
				onClick={cycleTab}
				className="mb-4 px-4 py-2 bg-gray-200 rounded"
			>
				Parent Control: Cycle Tab
			</button>
			<Tabs
				value={activeTabValue}
				onChange={setActiveTabValue}
				defaultValue={3}
			>
				<TabList>
					<TabItem value={1} disabled>
						Tab 1
					</TabItem>
					<TabItem value={2}>Tab 2</TabItem>
					<TabItem value={3}>Tab 3</TabItem>
				</TabList>
				<TabContent value={1}>Content for Tab 1</TabContent>
				<TabContent value={2}>Content for Tab 2</TabContent>
				<TabContent value={3}>Content for Tab 3</TabContent>
			</Tabs>

			<h3 className="mt-8">Uncontrolled Tabs (internal state)</h3>
			<Tabs>
				<TabList>
					<TabItem value={1}>Tab 1</TabItem>
					<TabItem value={2}>Tab 2</TabItem>
					<TabItem value={3}>Tab 3</TabItem>
				</TabList>
				<TabContent value={1}>Content for Tab 1</TabContent>
				<TabContent value={2}>Content for Tab 2</TabContent>
				<TabContent value={3}>Content for Tab 3</TabContent>
				<Test />
			</Tabs>
		</>
	);
}

function Test() {
	const { activeTabValue, changeTab } = useTabs();

	return (
		<div>
			{activeTabValue}
			<button
				onClick={() => changeTab(((activeTabValue + 1) % 3) + 1)}
				type="button"
			>
				Change Tab
			</button>
		</div>
	);
}
