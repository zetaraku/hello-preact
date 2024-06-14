import * as Preact from 'preact';

export const AppMain: Preact.FunctionComponent = (props) => {
	return (
		<main>
			{props.children}
		</main>
	);
};
