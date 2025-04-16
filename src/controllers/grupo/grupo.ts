import { RequestHandler } from "express";
import { alterarGrupoSchema, cadastrarGrupoSchema } from "../../schemas/grupo/cadastrar-grupo";
import { alterarGrupo, cadastrarGrupo } from "../../services/grupo/grupo";
import { tryCatch } from "../../utils/tryCatch";

export const cadastrar: RequestHandler = tryCatch(async (req, res) => {
    const data = cadastrarGrupoSchema.safeParse(req.body);
    if (!data.success) {
        res.json({ error: data.error.flatten().fieldErrors });
        return;
    }

    const { Nome_gru, Descricao_gru } = data.data;
    const grupoCriado = await cadastrarGrupo(Nome_gru, Descricao_gru);
    res.status(201).json({ grupo: grupoCriado });
    return;
})

export const alterar: RequestHandler = tryCatch(async (req, res) => {
    const resultado = alterarGrupoSchema.safeParse(req.body);

    if (!resultado.success) {
        res.json({ error: resultado.error.flatten().fieldErrors });
        return;
    }
    const { Grupo_Id, ...camposAtualizado } = resultado.data;

    if(Object.keys(camposAtualizado).length === 0){
        res.status(400).json({ error: 'Nenhum campo para atualizar' });
        return;
    }

    const grupoAlterado = await alterarGrupo(Grupo_Id, camposAtualizado);
    if (!grupoAlterado) {
        res.status(404).json({ error: 'Grupo não encontrado' });
        return;
    }

    res.json({ message: 'Grupo alterado com sucesso' });
    return;
});
