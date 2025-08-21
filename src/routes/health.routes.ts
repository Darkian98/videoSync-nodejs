/**
 * @openapi
 * /:
 *   get:
 *     summary: Check API health
 *     responses:
 *       200:
 *         description: API is healthy
 */

import { Router } from 'express';
import { get } from '../controllers/health/get.controller';
const healthRoutes = Router();

healthRoutes.route('/').get(get);

export default healthRoutes;
