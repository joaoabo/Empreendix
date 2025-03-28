import { db } from "../libs/prisma";

export const pegaUsuarioByEmail = async (Email_usu: string) => {
    const usuario = await db.usuario.findFirst({
        where: { Email_usu }
    })
    return usuario;
}