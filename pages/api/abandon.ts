import { canvasFromImage } from '@/image';
import { defineEndpoints } from '@/nrf';
import { output } from '@/response';
import * as y from 'yup';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { render, wrap } from '@/text';

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
			const { text } = req.query;
			const img = await readFile(join(process.cwd(), './assets/images/abandon.bmp')).catch(
				console.error,
			);
			if (!img) {
				return res.status(400).json({
					message: 'Interal error. Try again later',
				});
			}
			const { canvas } = await canvasFromImage(img);
			const ctx = canvas.getContext('2d');
			render(ctx, wrap(ctx, text, 320), 25, 440, 4);

			res.setHeader('Content-Type', 'image/png');
			res.end(canvas.toBuffer('image/png'));
		},
	},
});
