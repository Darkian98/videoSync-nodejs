/**
 * @openapi
 * /sync/{roomId}:
 *   get:
 *     summary: Ejecuta la acción principal para una sala específica
 *     description: Procesa la solicitud para la sala indicada por `roomId`.
 *     parameters:
 *       - in: path
 *         name: roomId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la sala
 *     responses:
 *       200:
 *         description: Operación completada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Operación completada"
 *       400:
 *         description: Error de parámetros
 *       500:
 *         description: Error interno del servidor
 */

import { Router } from 'express';
import { get as principalPost } from '../controllers/sync/principal/post.controller';
import { get as clientGet } from '../controllers/sync/client/get.controller';
import { post as actionPost } from '../controllers/sync/action/post.controller';

const syncRoutes = Router();

syncRoutes
    .route('video/:roomId')
    .get(principalPost)

syncRoutes
    .route('/events/:roomId')
    .get(clientGet)
    
syncRoutes
    .route('/:roomId')
    .post(actionPost)

// vapiRoutes
//     .route('/:VOICEFLOW_API_KEY/:VOICEFLOW_PROJECT_ID/chat/completions')
//     .post(postVapiCallVF);
// vapiRoutes
//     .route(
//         '/:VOICEFLOW_API_KEY/:VOICEFLOW_PROJECT_ID/:VOICEFLOW_VERSION_ID/callControlRPA'
//     )
//     .post(postCallControlRPA);
// vapiRoutes
//     .route('/:VOICEFLOW_API_KEY/:VOICEFLOW_PROJECT_ID/callControlRPA')
//     .post(postCallControlRPA);

export default syncRoutes;
