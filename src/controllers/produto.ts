import { RequestHandler } from "express";
import {
  cadastrarProdutoSchema,
  editarProdutoSchema,
  listarProdutosSchema,
} from "../schemas/cadastrar-produto";
import { alterarProduto, cadastrarProduto, deletarProduto, listarProdutos } from "../services/produto/produto";
import { tryCatch } from "../utils/tryCatch";

export const cadastrar: RequestHandler = tryCatch(async (req, res) => {
  const data = cadastrarProdutoSchema.safeParse(req.body);

  if (!data.success) {
    res.status(400).json({ error: data.error.flatten().fieldErrors });
    return;
  }

  const { Nome_Pro, Preco_Pro } = data.data;

  const produtoCriado = await cadastrarProduto(Nome_Pro, Preco_Pro);
  res.status(201).json({ produto: produtoCriado });
});

export const alterar: RequestHandler = tryCatch(async (req, res) => {
  const resultado = editarProdutoSchema.safeParse(req.body);
  if (!resultado.success) {
    res.status(400).json({ error: resultado.error.flatten().fieldErrors });
    return;
  }
  const { Produto_Id, ...camposAtualizado } = resultado.data;

  if (Object.keys(camposAtualizado).length === 0) {
    res.status(400).json({ error: "Nenhum campo para atualizar" });
    return;
  }

  const produtoAlterado = await alterarProduto(Produto_Id, camposAtualizado);
  res.status(200).json({ produto: produtoAlterado });
});

export const listar: RequestHandler = async (req, res) => {
    const query = listarProdutosSchema.safeParse(req.query);
    if (!query.success) {
      res.status(400).json({ error: query.error.flatten().fieldErrors });
      return;
    }
  
    const { page, limit, orderBy } = query.data;
    const resultado = await listarProdutos(page, limit, orderBy);
  
    if (!resultado || resultado.length === 0) {
      res.status(404).json({ error: "Nenhum produto encontrado" });
      return;
    }
  
    res.status(200).json({ resultado, message: "Produtos encontrados" });
  };
  
  export const deletar: RequestHandler = tryCatch(async (req, res) => {
    const { Produto_Id } = req.body;
  
    if (!Produto_Id || isNaN(Produto_Id)) {
        res.status(400).json({ error: 'ID inválido' });
        return;
      }
  
    await deletarProduto(Produto_Id);
    res.status(200).json({ message: 'Produto deletado com sucesso' });
  });
  