import * as Preact from 'preact';
import * as PreactIso from 'preact-iso';
import * as PreactHooks from 'preact/hooks';

export const AppErrorBoundary: Preact.FunctionComponent = (props) => {
	const location = PreactIso.useLocation();

	const [error, resetError] = PreactHooks.useErrorBoundary((err) => {
		console.debug(err);
	}) as [unknown, () => void];

	function backToHome() {
		location.route('/');
		resetError();
	}

	if (error !== undefined) {
		return (
			<div>
				<h1>Error</h1>

				<p>Oops. Something went wrong :(</p>
				<p>
					{error instanceof Error ? (
						<code>{error.name}: {error.message}</code>
					) : (
						<code>Error: {error}</code>
					)}
				</p>

				<button onClick={backToHome}>Back to Home</button>
			</div>
		);
	}

	return (
		<Preact.Fragment>{props.children}</Preact.Fragment>
	);
};
