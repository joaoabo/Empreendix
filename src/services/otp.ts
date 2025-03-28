import { v4 as uuidv4 } from 'uuid';
import { db } from "../libs/prisma";

export const gerarOTP = async (UsuarioId: number) => {
    let otpArray: number[] = [];
    for (let i = 0; i < 6; i++) {
        otpArray.push(Math.floor(Math.random() * 9));
    }   

    let Codigo_otp = otpArray.join('');
    let DataExpiracaoCodigo = new Date();
    DataExpiracaoCodigo.setMinutes(DataExpiracaoCodigo.getMinutes() + 15);

    const otp = await db.otp.create({
        data: {
            Id_otp: uuidv4(),
            Codigo_otp,
            UsuarioId,
            DataExpiracaoCodigo
        }
    })
    return otp;
}