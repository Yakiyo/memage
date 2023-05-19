/** @type {import('next').NextConfig} */
const config = {
	async redirects() {
		return [
			{
				source: '/',
				destination: 'https://github.com/Yakiyo/memage',
				permanent: false,
			},
		];
	},
};

module.exports = config;
