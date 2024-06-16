import * as Preact from 'preact';
import { ThemeChanger } from '@/modules/theme';

export const AppHeader: Preact.FunctionComponent<{
	title: string,
}> = (props) => {
	return (
		<header>
			<h2>
				{props.title}
				{' '}
				<ThemeChanger />
			</h2>
			<nav>
				<a href="/">
					[Index]
				</a>
				{' '}
				<a href="/users">
					[Users]
				</a>
				{' '}
				<a href="/tasks">
					[Tasks]
				</a>
			</nav>
			<hr />
		</header>
	);
};
