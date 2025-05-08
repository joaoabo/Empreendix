import { RequestHandler } from "express";
import { tryCatch } from "../../utils/tryCatch";

export const criarOrcaItens: RequestHandler = tryCatch(async(req, res) => {
    res.json({ message: 'rota de Orcamento itens criada com sucesso!'});
    return;
})
