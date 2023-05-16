import {stripe} from '@/lib/stripe';
import {NextApiRequest, NextApiResponse} from 'next';

const getUrl = (path = '') => process.env.NEXT_URL + path;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'POST') {
		return res.status(405).json({error: 'Method not allowed'});
	}

	let priceId: string | null = null;

	try {
		if (req.body.priceId) {
			priceId = req.body.priceId;
		} else if (typeof req.body === 'string') {
			priceId = JSON.parse(req.body)?.priceId;
		}
	} catch (error) {
		return res.status(400).json({error: 'Invalid request body'});
	}

	if (!priceId) {
		return res.status(400).json({error: 'Price ID is required'});
	}

	const checkoutSession = await stripe.checkout.sessions.create({
		success_url: getUrl('/success?session_id={CHECKOUT_SESSION_ID}'),
		cancel_url: getUrl('/'),
		mode: 'payment',
		line_items: [
			{
				price: priceId,
				quantity: 1,
			},
		],
	});

	return res.status(201).json({checkoutUrl: checkoutSession.url});
}
