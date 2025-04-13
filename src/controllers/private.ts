import { Response } from "express";
import { ExtendedRequest } from "../types/extended-request";
import { pegaUsuarioById } from "../services/usuario/usuario";


export const privateRoute = async (req: ExtendedRequest, res: Response) => {
    if(!req.Id_Usu) {
        res.status(401).json({ message: 'Acesso negado!' });
        return
    }

    const usuario = await pegaUsuarioById(req.Id_Usu);

    if(!usuario) {
        res.status(401).json({ message: 'Acesso negado!' });
        return
    }
    
    res.status(200).json({ message: 'Acesso permitido!' });
    return
};