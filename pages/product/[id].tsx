import {ImageContainer, ProductContainer, ProductDetailsContainer} from '@/styles/pages/product';
import {GetStaticPaths, GetStaticProps} from 'next';
import {SHIRT_PLACEHOLDER} from '@/shared/shirt-placeholder';
import {useRouter} from 'next/router';
import Image from 'next/image';
import {Price, Product} from '@/lib/stripe';
import {stripe} from '@/lib/stripe';
import {useState} from 'react';
import Head from 'next/head';

interface Props {
	product: Omit<Product, 'mainImagePlaceholder'> & {priceId: string};
}

export default function ProductDetails({product}: Props) {
	const [isCheckoutLoading, setCheckoutLoading] = useState(false);
	const {isFallback} = useRouter();

	const handleBuyProduct = async () => {
		setCheckoutLoading(true);
		try {
			const response = await fetch('/api/checkout', {
				method: 'POST',
				body: JSON.stringify({priceId: product.priceId}),
			}).then((res) => res.json());

			window.location.href = response.checkoutUrl;
		} catch (error) {
			setCheckoutLoading(false);
		}
	};

	return (
		<>
			<Head>
				<title>{product?.name ?? ''} | Ignite Shop</title>
			</Head>
			<ProductContainer>
				{isFallback ? (
					<>
						<ImageContainer loading={isFallback}>
							<Image
								alt='shirt-placeholder'
								src={SHIRT_PLACEHOLDER}
								width={480}
								height={520}
							/>
						</ImageContainer>
						<ProductDetailsContainer>
							<h1>Camiseta XXXX</h1>
							<span>R$ XXXX.XX</span>
							<p></p>

							<button disabled>Comprar agora</button>
						</ProductDetailsContainer>
					</>
				) : (
					<>
						<ImageContainer>
							<Image
								alt={product.name}
								src={product.mainImage}
								width={480}
								height={520}
							/>
						</ImageContainer>
						<ProductDetailsContainer>
							<h1>{product.name}</h1>
							<span>{product.formatedPrice}</span>
							<p>{product.description}</p>

							<button onClick={handleBuyProduct} disabled={isCheckoutLoading}>
								Comprar agora
							</button>
						</ProductDetailsContainer>
					</>
				)}
			</ProductContainer>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = () => ({
	paths: [],
	fallback: true,
});

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({params}) => {
	const id = params!.id;

	const stripeProduct = await stripe.products.retrieve(id, {
		expand: ['default_price'],
	});

	return {
		props: {
			product: {
				id: stripeProduct.id,
				description: stripeProduct.description,
				mainImage: stripeProduct.images[0],
				name: stripeProduct.name,
				formatedPrice: new Intl.NumberFormat('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				}).format(((stripeProduct.default_price as Price).unit_amount ?? 0) / 100),
				priceId: (stripeProduct.default_price as Price).id,
			},
		},
		revalidate: 60 * 60 * 24, // 24 hours
	};
};
