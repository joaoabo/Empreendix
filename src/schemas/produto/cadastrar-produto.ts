import { z } from "zod";

export const cadastrarProdutoSchema = z.object({
    Nome_Pro: z.string({message: 'Nome é obrigatório'}).min(3),
    Preco_Pro: z.number({message: 'Campo preço é obrigatorio!'})
                 .positive('O preço precisa ser maior que zero!'),
})

export const editarProdutoSchema = z.object({
  Produto_Id: z.number({ message: "ID do produto é obrigatório" }),
  Nome_pro: z.string().min(3).optional().nullable(),
  Preco_pro: z.number().positive("Não pode ser menos que 0").optional().nullable(),
  Descricao_pro: z.string().optional().nullable(),
  Quantidade_pro: z.number().int().positive("Não pode ser menos que 0").optional().nullable(),
  Categoria_pro: z.string().optional().nullable(),
  Imagem_pro: z.string().url().optional().nullable(),
  GrupoId: z.number().optional().nullable()
});

export const listarProdutosSchema = z.object({
  page: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : 1))
    .refine((val) => !isNaN(val) && val > 0, {
      message: "Page deve ser um número positivo",
    }),

  limit: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : 10))
    .refine((val) => !isNaN(val) && val > 0, {
      message: "Limit deve ser um número positivo",
    }),

  orderBy: z.enum(["asc", "desc"]).optional().default("asc"),
});