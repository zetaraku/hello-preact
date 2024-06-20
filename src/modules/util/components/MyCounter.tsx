import * as Preact from 'preact';
import * as PreactSignals from '@preact/signals';

export const MyCounter: Preact.FunctionComponent = () => {
	const count = PreactSignals.useSignal(0);

	const numbers = PreactSignals.useComputed(
		() => [...Array(count.value).keys()].map((e) => 1 + e).join(', '),
	);

	/*
		If you pass a signal into JSX instead of accessing its .value property in a text position,
		it will render as text and automatically update in-place without Virtual DOM diffing!
	*/
	return (
		<div>
			<p>You clicked {count} times!</p>
			<p>Let's count: {numbers}</p>
			<button onClick={() => { count.value += 1; }}>Click me</button>
		</div>
	);
};
