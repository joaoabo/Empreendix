import { z } from 'zod';

export const cadastrarClienteSchema = z.object({
    Nome_cli: z.string().min(4, { message: 'Nome é obrigatório' }),
    Telefone_cli: z.string().min(10, { message: 'Telefone deve ter pelo menos 10 dígitos' }),
    Documento_cli: z.string().optional(),
    Email_cli: z.string().email({ message: 'Email inválido' }).optional(),
    Endereco_cli: z.string().optional(),
    Tipo_cli: z.enum(['Física', 'Jurídica']).optional(),
    Observacao_cli: z.string().optional(),
})

export const alterarClienteSchema = z.object({
    Cliente_Id: z.number({message: 'Cliente não encontrado'}),
    Nome_cli: z.string().min(4, { message: 'Nome é obrigatório' }).optional().nullable(),
    Telefone_cli: z.string().min(10, { message: 'Telefone deve ter pelo menos 10 dígitos' }).optional().nullable(),
    Documento_cli: z.string().optional().optional().nullable(),
    Email_cli: z.string().email({ message: 'Email inválido' }).optional().optional().nullable(),
    Endereco_cli: z.string().optional().optional().nullable(),
    Tipo_cli: z.enum(['Física', 'Jurídica']).optional().optional().nullable(),
    Observacao_cli: z.string().optional().optional().nullable(),
});

export const deletarClienteSchema = z.object({
    Cliente_Id: z.number({message: 'Cliente não encontrado'}),
});