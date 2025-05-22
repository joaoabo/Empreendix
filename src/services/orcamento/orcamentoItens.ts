import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { db } from "../../libs/prisma";

type ItemInput = {
  ProdutoId: number;
  Quantidade: number;
};

export const criarOrcamentoItens = async ( OrcamentoId: number, Itens: ItemInput[] ) => {
  try {
    const orcamento = await db.orcamento.findUnique({
    where: { Id_Orcamento: OrcamentoId },
  });

  if (!orcamento) {
    throw new Error("Orçamento não encontrado!");
  }

  const novosItens = [];

  for (const item of Itens) {
    const produto = await db.produto.findUnique({
      where: { Produto_Id: item.ProdutoId },
    });

    if (!produto) {
      throw new Error(`Produto com ID ${item.ProdutoId} não encontrado!`);
    }

    const precoUnitario = produto.Preco_pro;
    const subTotal = precoUnitario * item.Quantidade;

    const novoItem = await db.orcamentoItem.create({
      data: {
        OrcamentoId,
        ProdutoId: item.ProdutoId,
        Quantidade: item.Quantidade,
        PrecoUnitario: precoUnitario,
        Subtotal: subTotal,
      },
    });

    novosItens.push(novoItem);
  }

  return novosItens;
  } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
        return null;
      }
      throw error;
  }
};
