import { type Canvas, Image, createCanvas, GlobalFonts } from '@napi-rs/canvas';
import { join } from 'path';
import { request } from 'undici';

/**
 * Utility function to generate canvas from an asset image
 */
export async function canvasFromImage(bgFile: Buffer): Promise<{
	canvas: Canvas;
	image: Image;
}> {
	const bg = new Image();
	bg.src = bgFile;
	const canvas = createCanvas(bg.width, bg.height);
	GlobalFonts.registerFromPath(join(process.cwd(), './assets/fonts/verdana.ttf'), 'verdana');
	const ctx = canvas.getContext('2d');
	ctx.drawImage(bg, 0, 0);
	ctx.font = '24px verdana';
	return { canvas, image: bg };
}

/**
 * Utility function to fetch an image from a url. Errors are returned as string.
 * A successfull execution returns an Image instance.
 */
export async function fetch_image(url: string) {
	const { value, error } = await request(url)
		.then((v) => ({ value: v, error: null }))
		.catch((e) => ({ value: null, error: e }));

	if (error) {
		return `${error}`;
	}
	if (!value || !value.headers['Content-Type']?.includes('image')) {
		return 'Invalid url provided. Url must point to a valid image';
	}
	const img = new Image();
	img.src = Buffer.from(await value.body.arrayBuffer());
	return img;
}
