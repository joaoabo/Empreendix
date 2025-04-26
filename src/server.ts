import express, { Request, Response, NextFunction } from "express";
import 'dotenv/config';
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

// Rotas públicas
server.use('/api', mainRouter);

// Rotas privadas
server.use('/api', verificarJWT, privateRouter);


server.use(errorHandler as (err: any, req: Request, res: Response, next: NextFunction) => void);

const port = process.env.PORT || 4001;
server.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
