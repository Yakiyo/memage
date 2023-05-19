import { TypedNextApiResponse } from 'next-rest-framework/dist/types';
import { canvasFromImage } from '@/image';
import { NextApiRequest } from 'next';
import { defineEndpoints } from '@/nrf';
import * as y from 'yup';
import { readFile } from 'fs/promises';
import { join } from 'path';

export default defineEndpoints({
	openApiSpecOverrides: {
		description: 'Abandoned child image',
	},
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
			// const { text } = req.query;
			const img = await readFile(join(process.cwd(), './assets/abandon.bmp')).catch(console.error);
			if (!img) {
				throw 'Missing image file';
			}
			const canvas = await canvasFromImage(img);
			res.setHeader('Content-Type', 'image/png');
			res.end(canvas.toBuffer('image/png'));
		},
	},
});
