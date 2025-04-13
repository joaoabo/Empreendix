import { Request, Response, NextFunction, RequestHandler } from "express";

// Esse helper transforma qualquer controller em um com try/catch embutido
export const tryCatch =
  (fn: RequestHandler) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
