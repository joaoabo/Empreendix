import { RequestHandler } from "express";

// Esse helper transforma qualquer controller em um com try/catch embutido
  export const tryCatch = (fn: RequestHandler): RequestHandler =>
    (req, res, next) => {
      Promise.resolve(fn(req, res, next)).catch((err) => {
        res.status(500).json({ error: 'Erro interno do servidor.' });
      });
    };