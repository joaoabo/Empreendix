import { db } from "../../libs/prisma";


export const cadastrarGrupo = async (Nome_gru: string, Descricao_gru: string) => {
    const grupo = await db.grupo.create({
        data: {
            Nome_gru,
            Descricao_gru,
        },
    })
    return grupo;
}