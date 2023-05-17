import { readFile } from 'fs/promises';
import { resolve } from 'path';
import { type Canvas, Image, createCanvas } from '@napi-rs/canvas';

/**
 * Utility function to generate canvas from an asset image
 */
export async function canvasFromImage(file: string): Promise<Canvas> {
	const bgFile = await readFile(resolve(process.cwd(), `./assets/images/${file}.bmp`)).catch(
		(e) => {
			console.error(e);
			return null;
		},
	);
	if (!bgFile) {
		throw 'Could not fetch file';
	}
	const bg = new Image();
	bg.src = bgFile;
	const canvas = createCanvas(bg.width, bg.height);
	const ctx = canvas.getContext('2d');
	ctx.drawImage(bg, 0, 0);
	return canvas;
}
