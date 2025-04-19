import { db } from "../../libs/prisma";

export const listarGrupos = async (page: number, limit: number, search: string) => {
    const grupos = await db.grupo.findMany({
        where: {
            Nome_gru: {
                contains: search,
            },
        },
        skip: (page - 1) * limit,
        take: limit,
    })
    return grupos;
}


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

export const deletarGrupo = async (Grupo_Id: number) => {
    const grupo = await db.grupo.delete({
        where: { Grupo_Id },
    })
    return grupo;
}