import { RequestHandler } from "express";
import { usuarioLoginSchema } from "../schemas/usuarioLogin";
import { pegaUsuarioByEmail } from "../services/usuario";
import { gerarOTP } from "../services/otp";
import { enviarEmail } from "../libs/mailtrap";

export const signin: RequestHandler = async (req, res) => {
     const data = usuarioLoginSchema.safeParse(req.body);
     if(!data.success){
        res.json({ error: data.error.flatten().fieldErrors });
        return;
     }

    const usuario = await pegaUsuarioByEmail(data.data.email);
    if(!usuario){
        res.json({ error: 'Usuario não encontrado' });
        return;
    }

    const otp = await gerarOTP(usuario.Id_Usu);

    await enviarEmail(usuario.Email_usu, 'Código de verificação', `Seu código de verificação é: ${otp.Codigo_otp}`);

    res.json({ id: otp.Id_otp });
    return;
}