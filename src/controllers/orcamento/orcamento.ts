import { RequestHandler } from "express";
import { tryCatch } from "../../utils/tryCatch";
import { alterarOrcamentoSchema, criarOrcamentoSchema } from "../../schemas/orcamento/criar-orcamento";
import { alterarOrcamentoExistente, criarOrcamentoNovo } from "../../services/orcamento/orcamento";

export const criarOrcamento: RequestHandler = tryCatch(async(req, res) => {
    const data = criarOrcamentoSchema.safeParse(req.body);

    if(!data.success){
        res.status(400).json({ error: data.error.flatten().fieldErrors});
        return;
    }

    const { ClienteId, UsuarioId } = data.data;

    const orcCriado = await criarOrcamentoNovo(ClienteId, UsuarioId);
    res.status(201).json({ orcamento: orcCriado});
    return;
});

export const alterarOrcamento: RequestHandler = tryCatch(async(req, res) => {
    const resultado = await alterarOrcamentoSchema.safeParse(req.body);
    if (!resultado.success){
        res.status(400).json({ error: resultado.error.flatten().fieldErrors });
        return;
    }
    const { Id_Orcamento, ...camposAtualizado } = resultado.data;

    if (Object.keys(camposAtualizado).length === 0){
        res.status(400).json({ error: "Nenhum campo foi alterado!"});
        return;
    }

    const orcamentoAlterado = await alterarOrcamentoExistente(Id_Orcamento, camposAtualizado);
    res.status(200).json({ orcamento: orcamentoAlterado });

})