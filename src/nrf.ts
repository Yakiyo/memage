import { NextRestFramework } from 'next-rest-framework';

export const { defineCatchAllHandler, defineEndpoints } = NextRestFramework({
	apiRoutesPath: '/pages/api/',
	openApiJsonPath: '/api/endpoints.json',
	openApiYamlPath: '/api/endpoints.yaml',
	swaggerUiConfig: {
		title: 'Imitari',
		description: 'An image manipulation api used to create niche meme-istic images',
	},
});
