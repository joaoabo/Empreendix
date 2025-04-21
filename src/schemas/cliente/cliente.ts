import { z } from 'zod';

export const cadastrarClienteSchema = z.object({
    Nome_cli: z.string().min(1, { message: 'Nome é obrigatório' }),
    Telefone_cli: z.string().min(10, { message: 'Telefone deve ter pelo menos 10 dígitos' }),
    Documento_cli: z.string().optional(),
    Email_cli: z.string().email({ message: 'Email inválido' }).optional(),
    Endereco_cli: z.string().optional(),
    Tipo_cli: z.enum(['Física', 'Jurídica']).optional(),
    Observacao_cli: z.string().optional(),
})

// Documento_cli     String?   // Pode ser CPF ou CNPJ
// Telefone_cli      String?
// Email_cli         String?
// Endereco_cli      String?
// Tipo_cli          String?   // "Física" ou "Jurídica"
// Observacao_cli    String?