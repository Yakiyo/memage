import * as y from 'yup';

/**
 * Output schema for almost all the endpoints
 */
export const output = [
	{
		status: 200,
		contentType: 'image/png',
		schema: y.mixed<Buffer>().required(),
	},
	{
		status: 400,
		contentType: 'application/json',
		schema: y
			.object({
				message: y.string().required(),
			})
			.required(),
	},
];
