import { Request, Response } from 'express';
import { logger } from '../../../utils/logger';
import { IRequestParams } from './interfaces';

export const get = async (
    req: Request<IRequestParams, object, object>,
    res: Response
) => {
    try {
        logger.info('Enter into processMessage');
        const { roomId } = req.params;
        const data: any = {};

        logger.info(`Works ${roomId}`);

        return res.status(200).send({
            message: "Works!",
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: e });
    }
};
