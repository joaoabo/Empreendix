import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { db } from '../../libs/prisma';

export const criarOrcamentoNovo = async (ClienteId: number, UsuarioId: number) => {
    try {
        return await db.orcamento.create({
            data: {
                ClienteId,
                UsuarioId
            }
        })
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError && error.code === "P2002") {
            return null;
        }
        throw error;
    }
}

export const alterarOrcamentoExistente = async (Id_Orcamento: number, campos: any) => {
    try {
        return await db.orcamento.update({
            where: { Id_Orcamento},
            data: {
                ...campos,
                AtualizadoEm : new Date(),
            },
        });
    } catch (err) {
        if (err instanceof PrismaClientKnownRequestError && err.code === "P2025"){
            return null;
        }
        throw err;
    }

}

export const deletarOrcamentoExistente = async (Id_Orcamento: number) => {
    try {
        return await db.orcamento.delete({
            where: { Id_Orcamento},
        })
    } catch (err) {
        if(err instanceof PrismaClientKnownRequestError && err.code === "P2025"){
            return null;
        }
        throw err;
    }
}