import {GetStaticProps} from 'next';
import Image from 'next/image';
import {useKeenSlider} from 'keen-slider/react';

import {getPlaiceholder} from 'plaiceholder';

import {Price, Product, stripe} from '@/lib/stripe';
import {HomeContainer, ProductLink} from '@/styles/pages/home';
import 'keen-slider/keen-slider.min.css';
import Link from 'next/link';
import Head from 'next/head';

interface Props {
	products: Product[];
}

export default function Home({products}: Props) {
	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 3,
			spacing: 48,
		},
	});

	return (
		<>
			<Head>
				<title>Home | Ignite Shop</title>
			</Head>

			<HomeContainer ref={sliderRef} className='keen-slider'>
				{products.map((product) => (
					<Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
						<ProductLink className='keen-slider__slide '>
							<Image
								src={product.mainImage}
								placeholder='blur'
								blurDataURL={product.mainImagePlaceholder}
								width={480}
								height={520}
								alt={product.name}
							/>
							<footer>
								<strong>{product.name}</strong>
								<span>{product.formatedPrice}</span>
							</footer>
						</ProductLink>
					</Link>
				))}
			</HomeContainer>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const response = await stripe.products.list({
		expand: ['data.default_price'],
	});
	const products = await Promise.all(
		response.data.map((product) =>
			getPlaiceholder(product.images[0]).then(({base64}) => ({
				id: product.id,
				description: product.description,
				mainImage: product.images[0],
				mainImagePlaceholder: base64,
				name: product.name,
				formatedPrice: new Intl.NumberFormat('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				}).format(((product.default_price as Price).unit_amount ?? 0) / 100),
			})),
		),
	);
	return {
		props: {
			products,
		},
		revalidate: 60 * 60 * 24, // 24 hours
	};
};
