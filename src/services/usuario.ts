import { db } from "../libs/prisma";

export const pegaUsuarioByEmail = async (Email_usu: string) => {
    const usuario = await db.usuario.findFirst({
        where: { Email_usu }
    })
    return usuario;
}

export const cadastrarUsuario = async (Nome_usu: string, Email_usu: string) => {
    const usuario = await db.usuario.create({
        data: {
            Nome_usu,
            Email_usu
        }
    })
    return usuario;
}