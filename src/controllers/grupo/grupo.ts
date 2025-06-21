import { RequestHandler } from "express";
import { alterarGrupoSchema, cadastrarGrupoSchema, deletarGrupoSchema } from "../../schemas/grupo/cadastrar-grupo";
import { alterarGrupo, cadastrarGrupo, deletarGrupo, listarGrupos } from "../../services/grupo/grupo";
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

export const deletar: RequestHandler = tryCatch(async (req, res) => {
    const grupo = await deletarGrupoSchema.safeParse(req.body);
    if (!grupo.success) {
        res.json({ error: grupo.error.flatten().fieldErrors });
        return;
    }
    const { Grupo_Id } = grupo.data;
    const grupoDeletado = await deletarGrupo(Grupo_Id);
    if (!grupoDeletado) {
        res.status(404).json({ error: 'Grupo não encontrado' });
        return;
    }
    res.json({ message: 'Grupo deletado com sucesso' });
    return;
});

export const listar: RequestHandler = tryCatch(async (req, res) => {
    const { page = 1, limit = 10, search = "" } = req.query as any;
    const grupos = await listarGrupos(Number(page), Number(limit), search);
    if (!grupos) {
        res.status(404).json({ error: 'Grupos não encontrados' });
        return;
    }
    res.json({ grupos });
    return;
});