import { z } from 'zod';

export const usuarioLoginSchema = z.object({
    email: z.string({ message: 'Email é obrigatório' }).email({ message: 'Email inválido' })
});
