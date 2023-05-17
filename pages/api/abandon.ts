import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(request: NextApiRequest, response: NextApiResponse) {
	const text = request.query.text;
	if (!text || typeof text !== 'string') {
		return response.status(400).json({
			message: 'Missing required parameter `text` in query',
		});
	}
	response.status(200).json({
		name: 'John doe',
		age: 56,
	});
}
