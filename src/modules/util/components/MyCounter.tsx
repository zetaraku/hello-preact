import * as Preact from 'preact';
import * as PreactHooks from 'preact/hooks';

export const MyCounter: Preact.FunctionComponent = () => {
	const [count, setCount] = PreactHooks.useState(0);

	const numbers = PreactHooks.useMemo(() => {
		return [...Array(count).keys()].map((e) => 1 + e).join(', ');
	}, [count]);

	return (
		<div>
			<p>You clicked {count} times!</p>
			<p>Let's count: {numbers}</p>
			<button onClick={() => { setCount((prevCount) => prevCount + 1); }}>Click me</button>
		</div>
	);
};
