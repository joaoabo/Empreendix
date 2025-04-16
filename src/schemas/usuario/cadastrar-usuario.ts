import { z } from 'zod';

export const cadastrarUsuarioSchema = z.object({
    Nome_usu: z.string({message: 'Nome é obrigatório'}).min(3),
    Email_usu: z.string({message: 'Campo e-mail é obrigatorio!'}).email({ message: 'Email inválido' }),
});