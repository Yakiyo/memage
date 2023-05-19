import { canvasFromImage } from '@/image';
import { defineEndpoints } from '@/nrf';
import { output } from '@/response';
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
		output,
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
