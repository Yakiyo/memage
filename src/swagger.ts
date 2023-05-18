/**
 * Swagger config for next-swagger-doc
 *
 * Specs: [https://swagger.io/specification/](https://swagger.io/specification/)
 */
export const swaggerDefinitions = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Imitari',
			version: '1.0.0',
			description: 'An image manipulation api',
			license: {
				name: 'MIT',
			},
		},
		externalDocs: {
			description: 'Documentation',
			url: `https://${process.env.VERCEL_URL ?? 'localhost:3000'}/docs`,
		},
	},
	apiFolder: 'pages/api',
};
