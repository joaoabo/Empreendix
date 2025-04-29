import { z } from 'zod';

export const criarOrcamentoSchema = z.object({
    ClienteId: z.number({ message: "Cliente é obrigatorio!"}),
    UsuarioId: z.number({ message: "Usuario é obrigatorio!"})
})