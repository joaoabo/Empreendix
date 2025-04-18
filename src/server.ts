import express, { urlencoded, Request, Response, NextFunction } from "express";
import 'dotenv/config';
import cors from 'cors';
import helmet from "helmet";
import { mainRouter } from "./routes/main";

const server = express();
server.use(helmet());
server.use(cors());
server.use(urlencoded({ extended: true }));
server.disable('x-powered-by');
server.use(express.json());

server.use(mainRouter);

server.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ error: "Erro interno do servidor!" });
  });

const port = process.env.PORT || 4001;
server.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
})