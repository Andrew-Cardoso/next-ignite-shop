import {globalStyles} from '@/styles/global';
import type {AppProps} from 'next/app';

import logoSvg from '../assets/logo.svg';
import Image from 'next/image';
import {Container, Header} from '@/styles/pages/app';

globalStyles();
export default function App({Component, pageProps}: AppProps) {
	return (
		<Container>
			<Header>
				<Image alt='logo' src={logoSvg} />
			</Header>
			<Component {...pageProps} />
		</Container>
	);
}
