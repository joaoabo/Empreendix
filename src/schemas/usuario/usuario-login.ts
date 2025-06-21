import { z } from 'zod';

export const usuarioLoginSchema = z.object({
    Email_usu: z.string({ message: 'Email é obrigatório' })
        .email({ message: 'Email inválido' })
        .transform(email => email.trim().toLowerCase())
});
