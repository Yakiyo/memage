import { canvasFromImage } from '@/image';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
	const text = request.query.text;
	if (!text || typeof text !== 'string') {
		return response.status(400).json({
			message: 'Missing required parameter `text` in query',
		});
	}
	const canvas = await canvasFromImage('abandon');
	response.setHeader('Content-Type', 'image/png');
	response.send(canvas.toBuffer('image/png'));
}
