import { Request, Response } from 'express';
import { logger } from '../../../utils/logger';
import { IRequestBody, IRequestParams } from './interfaces';
import { rooms } from '../../../stores/roomStates';

export const post = async (
    req: Request<IRequestParams, object, IRequestBody>,
    res: Response
) => {
    try {
        logger.info('Enter into action for room');
        const { roomId } = req.params;
        const { action, time } = req.body;

        const clients = rooms.get(roomId) || [];

        const message = `data: ${JSON.stringify({ action, time })}\n\n`;

        clients.forEach(client => client.write(message));

        res.status(200).json({ success: true, sentTo: clients.length });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: e });
    }
};
