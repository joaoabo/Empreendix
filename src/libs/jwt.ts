import jwt from 'jsonwebtoken';


export const criarJWT = (usuarioId: number) => {
    return jwt.sign({ usuarioId }, process.env.JWT_SECRET as string);
}