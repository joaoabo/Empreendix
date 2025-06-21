import { RequestHandler } from 'express';
import { ExtendedRequest } from '../types/extended-request';
import { verificarToken } from '../libs/jwt';

export const verificarJWT: RequestHandler = (req, res, next) => {
  try {
    const autenticacaoHeader = req.headers['authorization'];

    if (!autenticacaoHeader) {
      res.status(401).json({ message: 'Acesso negado! Faça login.' });
      return;
    }

    const token = autenticacaoHeader.split(' ')[1];

    if (!token) {
      res.status(401).json({ message: 'Acesso negado! Faça login.' });
      return;
    }

    const payload = verificarToken(token);

    (req as ExtendedRequest).Id_Usu = payload.usuarioId;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido ou expirado.' });
  }
};
