import { z } from 'zod';

export const cadastrarUsuarioSchema = z.object({
    Nome_usu: z.string({ message: 'Nome é obrigatório' }),
    Email_usu: z.string({ message: 'Email é obrigatório' })
        .email({ message: 'Email inválido' })
        .transform(email => email.trim().toLowerCase())
});
