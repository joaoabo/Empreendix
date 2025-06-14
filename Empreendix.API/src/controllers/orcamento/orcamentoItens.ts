import { RequestHandler } from "express";
import { tryCatch } from "../../utils/tryCatch";
import { criarOrcaItensSchema } from "../../schemas/orcamento/criar-orca-itens";
import { criarOrcamentoItens } from "../../services/orcamento/orcamentoItens";

export const criarOrcaItens: RequestHandler = tryCatch(async(req, res) => {
    const salvarOrcamento = criarOrcaItensSchema.safeParse(req.body);

    if(!salvarOrcamento.success){
        res.status(400).json({ errors: salvarOrcamento.error.errors });
        return;
    }
    const { OrcamentoId, Itens } = salvarOrcamento.data
    const novoItem = await criarOrcamentoItens(OrcamentoId, Itens);

    res.status(201).json(novoItem);
    return
})
