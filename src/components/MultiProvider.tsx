import * as Preact from 'preact';

export const MultiProvider: Preact.FunctionComponent<{
	providers: Preact.VNode[],
}> = (props) => {
	return props.providers.reduceRight(
		(acc, provider) => Preact.cloneElement(provider, {}, acc),
		<Preact.Fragment>{props.children}</Preact.Fragment>,
	);
};
