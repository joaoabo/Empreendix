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

export const alterarGrupo = async (Grupo_Id: number, campos: any) => {
    const grupo = await db.grupo.update({
        where: { Grupo_Id },
        data: {
            ...campos,
            Data_atualizacao: new Date(),
        },
    })
    return grupo;
}