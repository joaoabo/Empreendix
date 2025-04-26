import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { db } from "../../libs/prisma";

export const pegaUsuarioByEmail = async (Email_usu: string) => {
    try {
        // Normaliza o e-mail para a busca
        const normalizedEmail = Email_usu.trim().toLowerCase();
        
        const usuario = await db.usuario.findFirst({
            where: { Email_usu: normalizedEmail }
        });
        
        console.log('Email recebido para login na fonte:', usuario); // Agora você vai ver o resultado
        return usuario;
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError && error.code === "P2002") {
            return null;
        }
        throw error;
    }
}



export const pegaUsuarioById = async (Id_Usu: number) => {
    try {
        return await db.usuario.findFirst({
            where: { Id_Usu }
        })
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError && error.code === "P2002") {
            return null;
        }
        throw error;
        
    }
}

export const cadastrarUsuario = async (Nome_usu: string, Email_usu: string) => {
    try {
        return await db.usuario.create({
            data: {
                Nome_usu,
                Email_usu
            }
        })
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError && error.code === "P2002") {
            return null;
        }
        throw error;
        
    }
}