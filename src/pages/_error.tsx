import * as Preact from 'preact';

export const ErrorPage: Preact.FunctionComponent = (props) => {
	return (
		<section>
			<h1>Error</h1>
			{props.children ?? (
				<p>Oops. An error occurred.</p>
			)}
		</section>
	);
};
