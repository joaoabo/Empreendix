import { z } from 'zod';

export const criarOrcaItensSchema = z.object({
    OrcamentoId: z.number({ message: "Não foi possével criar orçamento!"}),
    Produto: z.string().min(3),
    Quantidade: z.number({ message: "Informe a quantidade!"}).positive("Não pode ser menos que 0"),
});
