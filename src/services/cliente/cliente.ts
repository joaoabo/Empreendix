import { db } from "../../libs/prisma";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const cadastrarCliente = async (clienteData: any) => {
  try {
    return await db.cliente.create({
      data: clienteData,
    });
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2002") {
      return null;
    }
    throw err;
  }
};

export const alterarCliente = async (Cliente_Id: number, campos: any) => {
  try {
    return await db.cliente.update({
      where: { Cliente_Id },
      data: {
        ...campos,
        Data_atualizacao: new Date(),
      },
    });
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
      return null;
    }
    throw err;
  }
};

export const deletarCliente = async (Cliente_Id: number) => {
  try {
    return await db.cliente.delete({
      where: { Cliente_Id },
    });
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
      return null;
    }
    throw err;
  }
};
