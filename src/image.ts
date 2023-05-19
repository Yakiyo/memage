import { type Canvas, Image, createCanvas, GlobalFonts } from '@napi-rs/canvas';
import { join } from 'path';

/**
 * Utility function to generate canvas from an asset image
 */
export async function canvasFromImage(bgFile: Buffer): Promise<Canvas> {
	const bg = new Image();
	bg.src = bgFile;
	const canvas = createCanvas(bg.width, bg.height);
	GlobalFonts.registerFromPath(join(process.cwd(), './assets/fonts/verdana.ttf'), 'verdana');
	const ctx = canvas.getContext('2d');
	ctx.drawImage(bg, 0, 0);
	ctx.font = '24px verdana';
	return canvas;
}
