import { RequestHandler } from "express";

export const homePrivada: RequestHandler = async (req, res) => {
    res.json({ message: 'Usuario não identificado!' });
    return;
}

export const homePublica: RequestHandler = async (req, res) => {
    res.json({ message: 'Seja bem vindo!' });
    return;
}
