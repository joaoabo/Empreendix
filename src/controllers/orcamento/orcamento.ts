import { RequestHandler } from "express";

export const criarOrcamento: RequestHandler = async(req, res) => {
    res.json({messagen: 'Rota de orçamento criada!'});
    return;
}