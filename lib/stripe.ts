import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: '2022-11-15',
	appInfo: {
		name: 'Ignite Shop',
	},
});

export type Price = Stripe.Price;

export interface Product {
  id: string;
  description: string;
  mainImage: string;
  mainImagePlaceholder: string;
  name: string;
  formatedPrice: string;
}