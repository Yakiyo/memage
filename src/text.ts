import { type SKRSContext2D } from '@napi-rs/canvas';

/**
 * Wrap text before writing in canvas
 * @param ctx Canvas context
 * @param text The text to wrap
 * @param maxWidth Maximum width of a line
 * @param x x co-ordinates to start writing from
 * @param y y co-ordinates to start writing from
 */
export function wrap(ctx: SKRSContext2D, text: string, maxWidth: number): string[] {
	const lines: string[] = [];
	let line = '';

	for (const word of text.split(' ')) {
		const newline = `${line} ${word}`;
		const { width } = ctx.measureText(newline);

		if (width < maxWidth) {
			line = newline;
		} else {
			lines.push(line.trim());
			line = word;
		}
	}
	if (line) {
		lines.push(line);
	}
	return lines;
}

/**
 * Render text to canvas
 * @param ctx Canvas context
 * @param text Array of text
 * @param x Ordinate
 * @param y Abcissa
 * @param lineGap Width of line gaps
 */
export function render(ctx: SKRSContext2D, text: string[], x: number, y: number, lineGap = 15) {
	let gap = y;
	text.forEach((line) => {
		ctx.fillText(line, x, gap);
		gap += lineGap;
	});
}
