import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { db } from "../../libs/prisma";

export const cadastrarProduto = async (Nome_pro: string, Preco_pro: number) => {
    try {
        return await db.produto.create({
            data: {
                Nome_pro,
                Preco_pro,
            },
        });
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError && error.code === "P2002") {
            return null;
        }
        throw error;
    }
}

export const alterarProduto = async (Produto_Id: number, campos: any) => {
    try {
        return await db.produto.update({
            where: { Produto_Id },
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
}

export const deletarProduto = async (Produto_Id: number) => {
  try {
      return await db.produto.delete({
          where: { Produto_Id },
      });
  } catch (err) {
      if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
          return null;
      }
      throw err;
  }
};

export const listarProdutos = async (
    page: number = 1,
    limit: number = 10,
    orderBy: "asc" | "desc" = "asc"
  ) => {
    try {
      return await db.produto.findMany({
        orderBy: { Produto_Id: orderBy },
        skip: (page - 1) * limit,
        take: limit,
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
        return null;
      }
      throw error;
    }
  };

export const buscaProdutosInteligente = async(nome: string) => {
    const produtos = await db.produto.findMany({
        where: {
            Nome_pro: {
            contains: nome,
            //mode: 'insensitive' // Busca sem diferenciar maiúsculas de minúsculas
          }
        },
        take: 10 // Limita a 10 resultados para não sobrecarregar
      });
    
      return produtos;
}