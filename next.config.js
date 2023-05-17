module.exports = {
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
