import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export const enviarEmail = async (to: string, subject: string, body: string) => {
    const mailOptions = {
        from: `"Sistema" <${process.env.SMTP_USER}>`,
        to,
        subject,
        text: body,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        throw new Error('Erro ao enviar e-mail');
    }
}