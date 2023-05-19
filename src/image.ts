import { type Canvas, Image, createCanvas } from '@napi-rs/canvas';

/**
 * Utility function to generate canvas from an asset image
 */
export async function canvasFromImage(bgFile: Buffer): Promise<Canvas> {
	const bg = new Image();
	bg.src = bgFile;
	const canvas = createCanvas(bg.width, bg.height);
	const ctx = canvas.getContext('2d');
	ctx.drawImage(bg, 0, 0);
	return canvas;
}
