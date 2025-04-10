import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ExtendedRequest } from '../types/extended-request';

export const criarJWT = (usuarioId: number) => {
    return jwt.sign({ usuarioId }, process.env.JWT_SECRET as string);
}

export const verificarJWT = async (req: ExtendedRequest, res: Response, next: NextFunction) => {
    const autenticacaoHeader = req.headers['authorization'];
    if (!autenticacaoHeader){
      res.status(401).json({ message: 'Acesso negado!' });
      return
    }  
  
    const token = autenticacaoHeader.split(' ')[1];
  
    jwt.verify(
      token, 
      process.env.JWT_SECRET as string, 
      (err, decoded: any) => {
      if(err) {
        res.status(401).json({ message: 'Acesso negado!' });
        return 
      }
      req.Id_Usu = decoded.usuarioId;
      next()
    });
};