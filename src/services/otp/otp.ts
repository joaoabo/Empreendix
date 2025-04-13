import { v4 as uuidv4 } from 'uuid';
import { db } from "../../libs/prisma";

export const gerarOTP = async (UsuarioId: number) => {
    let otpArray: number[] = [];
    for (let i = 0; i < 6; i++) {
        otpArray.push(Math.floor(Math.random() * 9));
    }   

    let Codigo_otp = otpArray.join('');
    let DataExpiracaoCodigo = new Date();
    DataExpiracaoCodigo.setHours(DataExpiracaoCodigo.getMinutes() + 24); // 24 horas para melhorar os testes
    // DataExpiracaoCodigo.setHours(DataExpiracaoCodigo.getHours() + 1); // 1 hora para produção

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

export const validarOTP = async (Id_otp: string, Codigo_otp: string) => {
    const otp = await db.otp.findFirst({
        select: {UsuarioId: true},
        where: {
            Id_otp,
            Codigo_otp,
            DataExpiracaoCodigo: {
                gt: new Date()
            },
            StatusCodigo: false
        }
    });

    if(otp && otp.UsuarioId){
        await db.otp.update({
            where: { Id_otp },
            data: { StatusCodigo: true }
        });
        return otp.UsuarioId;
    }

    return false;
}