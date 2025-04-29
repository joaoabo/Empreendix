
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