import { db } from '../../libs/prisma';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export const cadastrarCliente = async (clienteData: any) => {
    const cliente = await db.cliente.create({
        data: clienteData,
    })
    return cliente;
}

export const alterarCliente = async (Cliente_Id: number, campos: any) => {
    const cliente = await db.cliente.update({
        where: { Cliente_Id },
        data: {
            ...campos,
            Data_atualizacao: new Date(),
        },
    })
    return cliente;
}

export const deletarCliente = async (Cliente_Id: number) => {
    try {
      const cliente = await db.cliente.delete({
        where: { Cliente_Id },
      });
      return cliente;
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError && err.code === 'P2025') {
        return null;
      }
      throw err;
    }
  };