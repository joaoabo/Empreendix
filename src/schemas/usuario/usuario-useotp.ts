import { z } from 'zod';

export const usuarioUseOTPSchema = z.object({
    Id_otp: z.string({ message: 'Id do OTP é obrigatório' }),
    Codigo_otp: z.string().length(6, { message: 'Código OTP é obrigatório' }),
});