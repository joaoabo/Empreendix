import { z } from 'zod';

export const cadastrarGrupoSchema = z.object({
    Nome_gru: z.string({ message: 'Nome é obrigatório' }).min(3),
    Descricao_gru: z.string({ message: 'Descrição é obrigatória' }).min(10),
});