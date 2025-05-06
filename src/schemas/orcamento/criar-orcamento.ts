import { z } from 'zod';

export const criarOrcamentoSchema = z.object({
    ClienteId: z.number({ message: "Cliente é obrigatorio!"}),
    UsuarioId: z.number({ message: "Usuario é obrigatorio!"})
})

export const alterarOrcamentoSchema = z.object({
    Id_Orcamento: z.number({ message: "ID do orcamento é obrigatório" }),
    ClienteId: z.number().optional().nullable()
})
