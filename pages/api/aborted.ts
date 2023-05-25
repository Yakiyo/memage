import { canvasFromImage, defineEndpoints, output, fetchImage } from '@/index';
import * as y from 'yup';
import { readFile } from 'fs/promises';
import { join } from 'path';

export default defineEndpoints({
	openApiSpecOverrides: {
		description: 'All the reasons I should have been aborted',
	},
	GET: {
		input: {
			query: y
				.object({
					avatar: y.string().required(),
				})
				.required(),
		},
		output,
		async handler({ req, res }) {
			const { avatar } = req.query;
			const img = await readFile(join(process.cwd(), './assets/images/aborted.bmp')).catch(
				console.error,
			);
			if (!img) {
				return res.status(400).json({
					message: 'Interal error. Try again later',
				});
			}
			const av = await fetchImage(avatar);
			if (typeof av === 'string') {
				return res.status(400).json({
					message: av,
				});
			}
			const { canvas } = await canvasFromImage(img);
			const ctx = canvas.getContext('2d');
			ctx.save();
			const center = { x: 440, y: 180 };
			ctx.lineWidth = 10;
			ctx.arc(center.x, center.y, 45, 0, Math.PI * 2, true);
			ctx.closePath();
			ctx.clip();
			ctx.drawImage(av, center.x - 45, center.y - 45, 90, 90);
			ctx.restore();

			res.setHeader('Content-Type', 'image/png');
			res.end(canvas.toBuffer('image/png'));
		},
	},
});
