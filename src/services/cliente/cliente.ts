import { db } from '../../libs/prisma';

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