import { NextRestFramework } from 'next-rest-framework';

export const { defineCatchAllHandler, defineEndpoints } = NextRestFramework({
	apiRoutesPath: '/pages/api/',
	openApiJsonPath: '/api/endpoints.json',
	openApiYamlPath: '/api/endpoints.yaml',
	swaggerUiConfig: {
		title: 'memage',
		description: 'An image manipulation api used to create niche meme-istic images',
	},
	openApiSpecOverrides: {
		openapi: '3.0.0',
		info: {
			title: 'memage',
			version: '0.1.0',
			description: 'Image manipulation api to generate meme-ish images',
			license: {
				name: 'MIT',
			},
		},
		externalDocs: {
			description: 'Documentation',
			url: `https://${process.env.VERCEL_URL ?? 'localhost:3000'}/docs`,
		},
	},
});
