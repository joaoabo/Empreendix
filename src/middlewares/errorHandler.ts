import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

// Enum opcional para tornar os códigos mais legíveis
enum PrismaErrorCode {
  RecordNotFound = 'P2025',
  UniqueConstraint = 'P2002',
}

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  // Só exibe log em ambiente de desenvolvimento
  if (process.env.NODE_ENV !== 'production') {
    console.error('[Erro Interno]', err);
  }

  // Validação com Zod
  if (err instanceof ZodError) {
    return res.status(400).json({
      status: 'error',
      message: 'Erro de validação',
      errors: err.format(),
    });
  }

  // Erros conhecidos do Prisma
  if (err instanceof PrismaClientKnownRequestError) {
    if (err.code === PrismaErrorCode.RecordNotFound) {
      return res.status(404).json({
        status: 'error',
        message: 'Registro não encontrado.',
      });
    }

    if (err.code === PrismaErrorCode.UniqueConstraint) {
      return res.status(409).json({
        status: 'error',
        message: 'Registro já existe.',
      });
    }
  }

  // Erro genérico
  return res.status(500).json({
    status: 'error',
    message: 'Erro interno do servidor. agora aqui',
  });
}
