/** @type {import('next').NextConfig} */
const config = {
	async redirects() {
		return [
			{
				source: '/',
				destination: 'https://github.com/Yakiyo/imitari',
				permanent: false,
			},
		];
	},
};

module.exports = config
