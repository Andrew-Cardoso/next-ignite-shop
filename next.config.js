/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	images: {
		domains: ['files.stripe.com', 'https://files.stripe.com'],
	},
};

module.exports = nextConfig;
