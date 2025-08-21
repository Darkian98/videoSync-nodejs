import { Request, Response } from 'express';
import { logger } from '../../../utils/logger';
import { IRequestParams } from './interfaces';
import { rooms } from '../../../stores/roomStates';

export const get = async (
    req: Request<IRequestParams, object, object>,
    res: Response
) => {
    try {
        const { roomId } = req.params;
        logger.info(`User into room with id "${roomId}"`);

        res.setHeader("Content-Type", "text/event-stream");
        res.setHeader("Cache-Control", "no-cache");
        res.setHeader("Connection", "keep-alive");

        res.write("\n"); // handshake inicial

        // Guardar el cliente en la sala
        if (!rooms.has(roomId)) rooms.set(roomId, []);
        rooms.get(roomId)!.push(res);

        // Eliminar el cliente cuando se desconecte
        req.on("close", () => {
            const clients = rooms.get(roomId) || [];
            rooms.set(roomId, clients.filter(c => c !== res));
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: e });
    }
};
