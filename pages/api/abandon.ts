import { TypedNextApiResponse } from 'next-rest-framework/dist/types';
import { canvasFromImage } from '@/image';
import { NextApiRequest } from 'next';
import { defineEndpoints } from '@/nrf';
import * as y from 'yup';

export default defineEndpoints({
	GET: {
		input: {
			query: y
				.object({
					text: y.string().required(),
				})
				.required(),
		},
		output: [
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
		],
		async handler({ req, res }) {
			const text = req.query.text;
			if (!text || typeof text !== 'string') {
				return res.status(400).json({
					message: 'Missing required parameter `text` in query',
				});
			}
			const canvas = await canvasFromImage('abandon');
			res.setHeader('Content-Type', 'image/png');
			res.end(canvas.toBuffer('image/png'));
		},
	},
	openApiSpecOverrides: {
		description: 'Abandoned child image',
	},
});
