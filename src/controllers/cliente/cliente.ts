import { RequestHandler } from 'express';
import { tryCatch } from '../../utils/tryCatch';
import { cadastrarCliente } from '../../services/cliente/cliente';
import { cadastrarClienteSchema } from '../../schemas/cliente/cliente';


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
