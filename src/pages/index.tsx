import * as Preact from 'preact';
import { MyCounter } from '@/modules/util';
import preactLogo from '@/assets/preact.svg';

export const IndexPage: Preact.FunctionComponent = () => {
	return (
		<div>
			<h1>Get Started building Vite-powered Preact Apps</h1>
			<a href="https://preactjs.com" target="_blank" rel="noreferrer">
				<img src={preactLogo} alt="Preact logo" height="160" width="160" />
			</a>
			<MyCounter />
		</div>
	);
};
