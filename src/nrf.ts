import { NextRestFramework } from 'next-rest-framework';

export const { defineCatchAllHandler, defineEndpoints } = NextRestFramework({
	apiRoutesPath: '/pages/api/',
	// openApiJsonPath: '/api/endpoints.json',
	// openApiYamlPath: '/api/endpoints.yaml'
});
