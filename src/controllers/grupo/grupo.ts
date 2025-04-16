import { RequestHandler } from "express";
import { cadastrarGrupoSchema } from "../../schemas/grupo/cadastrar-grupo";
import { cadastrarGrupo } from "../../services/grupo/grupo";

export const cadastrar: RequestHandler = async (req, res) => {
    const data = cadastrarGrupoSchema.safeParse(req.body);
    if (!data.success) {
        res.json({ error: data.error.flatten().fieldErrors });
        return;
    }

    const { Nome_gru, Descricao_gru } = data.data;
    const grupoCriado = await cadastrarGrupo(Nome_gru, Descricao_gru);
    res.status(201).json({ grupo: grupoCriado });
    return;
}