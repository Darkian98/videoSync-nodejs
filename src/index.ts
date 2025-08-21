import 'dotenv/config';
import cors from 'cors';
import healthRoutes from './routes/health.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import path from "path";
import express from 'express';
import syncRoutes from './routes/sync.routes';
import { swaggerOptions } from './config/swaggerOptions';
try {
	const app = express();
	const port = process.env.PORT ?? 8080;
	const host = process.env.HOST ?? 'localhost';

	app.use(express.json());
	app.use(cors());

	const swaggerSpec = swaggerJSDoc(swaggerOptions({ host, port }));

	// Ruta Swagger
	app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

	app.use('/', healthRoutes);
	app.use('/sync', syncRoutes);
	app.get("/room/:roomId", (req, res) => {
		res.sendFile(path.join(__dirname, "../main.html"));
	});
	app.get("/client/room/:roomId", (req, res) => {
		res.sendFile(path.join(__dirname, "../client.html"));
	});

	app.listen(port, () => {
		console.log(`Server is running at http://${host}:${port}`);
	});

	app.get("/video.mp4", (req, res) => {
		res.sendFile(path.join(__dirname, "../video.mp4"));
	});
} catch (error) {
	console.error({ error });
}
