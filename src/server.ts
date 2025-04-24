import express, { Request, Response, NextFunction } from "express";
import 'dotenv/config';
import cors from 'cors';
import helmet from "helmet";
import { mainRouter } from "./routes/main";
import { errorHandler } from './middlewares/errorHandler';

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.disable('x-powered-by');

server.use(mainRouter);

server.use(errorHandler as (err: any, req: Request, res: Response, next: NextFunction) => void);

const port = process.env.PORT || 4001;
server.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
