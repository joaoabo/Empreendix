import jwt from 'jsonwebtoken';

export const criarJWT = (usuarioId: number) => {
  return jwt.sign({ usuarioId }, process.env.JWT_SECRET as string, { expiresIn: '1d' });
};

export const verificarToken = (token: string): { usuarioId: number } => {
  return jwt.verify(token, process.env.JWT_SECRET as string) as { usuarioId: number };
};
