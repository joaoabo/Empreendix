import { RequestHandler } from "express";

export const signin: RequestHandler = async (req, res) => {
    // Validar os dados recebidos
    // Verificar se o usuario existe (baseado no e-mail)
    // Gerar um codigo OTP para o usuario
    // Enviar um e-mail para o usuario
    // Devolve o ID do codigo OTP
}