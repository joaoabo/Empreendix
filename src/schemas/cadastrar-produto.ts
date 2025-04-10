import { z } from "zod";

export const cadastrarProdutoSchema = z.object({
    Nome_Prod: z.string({message: 'Nome é obrigatório'}).min(3),
    Preco_Prod: z.number({message: 'Campo preço é obrigatorio!'})
                 .positive('O preço precisa ser maior que zero!'),
})