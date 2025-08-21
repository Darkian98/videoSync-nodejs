import { Request, Response } from 'express';
import { logger } from '../../utils/logger';

export const get = async (req: Request, res: Response): Promise<Response> => {
	logger.info('Healthy!');

	const response = {
		code: 200,
		result: {
			message: 'Healthy!',
		},
	};
	if (response.code === 200) {
		return res.json(response.result);
	}

	return res.status(response.code).json(response.result);
};
