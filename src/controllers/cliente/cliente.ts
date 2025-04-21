import { RequestHandler } from 'express';
import { tryCatch } from '../../utils/tryCatch';
import { alterarCliente, cadastrarCliente } from '../../services/cliente/cliente';
import { alterarClienteSchema, cadastrarClienteSchema } from '../../schemas/cliente/cliente';


export const cadastrar: RequestHandler = tryCatch(async (req, res) => {
    const data = cadastrarClienteSchema.safeParse(req.body);

    if (!data.success) {
        res.status(400).json({ error: data.error.format() });
        return 
    }

    const clienteCriado = await cadastrarCliente(data.data);


    if (!clienteCriado) {
        res.status(500).json({ error: 'Erro ao cadastrar cliente' });
        return 
    }
    res.status(201).json(clienteCriado);
    return;
});

export const alterar: RequestHandler = tryCatch(async (req, res) => {
    const resultado = alterarClienteSchema.safeParse(req.body);

    if (!resultado.success) {
        res.status(400).json({ error: resultado.error.format() });
        return 
    }
    const { Cliente_Id, ...campos } = resultado.data;
    if (Object.keys(campos).length === 0) {
        res.status(400).json({ error: 'Nenhum campo para atualizar' });
        return 
    }   
    const clienteAlterado = await alterarCliente(Cliente_Id, campos);
    if (!clienteAlterado) {
        res.status(500).json({ error: 'Erro ao alterar cliente' });
        return 
    }
    res.status(200).json({ cliente: clienteAlterado});
    return;
});