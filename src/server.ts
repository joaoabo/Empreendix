import 'dotenv/config';
import express, { Request, Response, NextFunction } from "express";
import {swaggerUI, swaggerSpec } from './libs/swagger';
import cors from 'cors';
import helmet from "helmet";

import { mainRouter, privateRouter } from "./routes/main";
import { errorHandler } from './middlewares/errorHandler';
import { verificarJWT } from "./middlewares/authMiddleware";

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.disable('x-powered-by');

server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Rotas públicas
server.use('/api', mainRouter);

// Rotas privadas
server.use('/api', verificarJWT, privateRouter);


server.use(errorHandler as (err: any, req: Request, res: Response, next: NextFunction) => void);

const port = process.env.PORT || 4001;
server.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
    console.log(`📘 Swagger em: http://localhost:${port}/api-docs`);
});
