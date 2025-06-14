import { z } from 'zod';

export const criarOrcaItensSchema = z.object({
  OrcamentoId: z.number(),
  Itens: z.array(
    z.object({
      ProdutoId: z.number({ message: "Produto inválido!" }),
      Quantidade: z.number().positive("Quantidade deve ser maior que zero"),
    })
  ).min(1, { message: "Informe ao menos um item!" }),
});
