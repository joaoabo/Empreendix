import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { db } from "../../libs/prisma";

export const listarGrupos = async (page: number, limit: number, search: string) => {
    try {
        return await db.grupo.findMany({
            where: {
                Nome_gru: {
                    contains: search,
                },
            },
            skip: (page - 1) * limit,
            take: limit,
        })
    } catch (err) {
        if(err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
            return null;
        }
        throw err;
    }
}

export const cadastrarGrupo = async (Nome_gru: string, Descricao_gru: string) => {
   try {
    return await db.grupo.create({
        data: {
            Nome_gru,
            Descricao_gru,
        },
    })
   } catch (error) {
       if (error instanceof PrismaClientKnownRequestError && error.code === "P2002") {
           return null;
       }
       throw error;
    
   }
}

export const alterarGrupo = async (Grupo_Id: number, campos: any) => {
    try {
        return await db.grupo.update({
            where: { Grupo_Id },
            data: {
                ...campos,
                Data_atualizacao: new Date(),
            },
        })
    } catch (err) {
        if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
            return null;
        }
        throw err;
    }
}

export const deletarGrupo = async (Grupo_Id: number) => {
    try {
        return await db.grupo.delete({
            where: { Grupo_Id },
        })
    } catch (err) {
        if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
            return null;
        }
        throw err;
    }
}