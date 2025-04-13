import { db } from "../../libs/prisma";

export const cadastrarProduto = async (Nome_pro: string, Preco_pro: number) => {
    const produto = await db.produto.create({
       data: {
              Nome_pro,
              Preco_pro
       }
    })
    return produto;
}

export const alterarProduto = async (Produto_Id: number, campos: any) => {
    const produto = await db.produto.update({
        where: { Produto_Id },
        data: {
            ...campos,
            Data_atualizacao: new Date()
        },
    });
    return produto;
}

export const listarProdutos = async (
    page: number = 1,
    limit: number = 10,
    orderBy: "asc" | "desc" = "asc"
  ) => {
    const produtos = await db.produto.findMany({
      orderBy: { Produto_Id: orderBy },
      skip: (page - 1) * limit,
      take: limit,
    });
  
    return produtos;
  };

  export const deletarProduto = async (Produto_Id: number) => {
    const produto = await db.produto.delete({
      where: { Produto_Id }
    });
    return produto;
  };
  