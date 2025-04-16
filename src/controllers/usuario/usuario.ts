import { RequestHandler } from "express";
import { usuarioLoginSchema } from "../../schemas/usuario/usuario-login";
import { cadastrarUsuario, pegaUsuarioByEmail } from "../../services/usuario/usuario";
import { gerarOTP, validarOTP } from "../../services/otp/otp";
import { enviarEmail } from "../../libs/nodemailer";
import { cadastrarUsuarioSchema } from "../../schemas/usuario/cadastrar-usuario";
import { usuarioUseOTPSchema } from "../../schemas/usuario/usuario-useotp";
import { criarJWT } from "../../libs/jwt";

export const signup: RequestHandler = async (req, res) => {
    const data = cadastrarUsuarioSchema.safeParse(req.body);
     if(!data.success){
        res.json({ error: data.error.flatten().fieldErrors });
        return;
     }
    console.log(data.data.Nome_usu, data.data.Email_usu);
    const usuario = await pegaUsuarioByEmail(data.data.Email_usu);
    if(usuario){
        res.json({ error: 'Email já cadastrado' });
        return;
    }
    console.log(data.data.Nome_usu, data.data.Email_usu);
    const novoUsuario = await cadastrarUsuario(data.data.Nome_usu, data.data.Email_usu);

    res.status(201).json({ usuario: novoUsuario });
    return;
}

export const signin: RequestHandler = async (req, res) => {
     const data = usuarioLoginSchema.safeParse(req.body);
     if (!data.success) {
        res.json({ error: data.error.flatten().fieldErrors });
        return;
    }

    const usuario = await pegaUsuarioByEmail(data.data.Email_usu);
    if(!usuario){
        res.json({ error: 'Usuario não encontrado' });
        return;
    }

    const otp = await gerarOTP(usuario.Id_Usu);

    await enviarEmail(usuario.Email_usu, 'Código de verificação', `Seu código de verificação é: ${otp.Codigo_otp}`);

    res.json({ id: otp.Id_otp });
    return;
}

export const usarOPT: RequestHandler = async (req, res) => {
    const data = usuarioUseOTPSchema.safeParse(req.body);
     if(!data.success){
        res.json({ error: data.error.flatten().fieldErrors });
        return;
     }

     const usuarioId = await validarOTP(data.data.Id_otp, data.data.Codigo_otp);
     if (!usuarioId) {
         res.json({ error: 'Código inválido ou expirado aqui' });
         return;
     }
     
     const token = criarJWT(usuarioId);

    res.json({ token, usuarioId });
}