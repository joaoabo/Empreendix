import { db } from '../../libs/prisma';

export const cadastrarCliente = async (clienteData: any) => {
    const cliente = await db.cliente.create({
        data: clienteData,
    })
    return cliente;
}