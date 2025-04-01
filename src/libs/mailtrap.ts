import { MailtrapClient } from "mailtrap"

export const enviarEmail = async (to: string, subject: string, body: string) => {
    const mailtrap = new MailtrapClient({
        token: process.env.MAILTRAP_TOKEN as string,
        testInboxId: 3569399
    });

    try {
        await mailtrap.send({
            from: { name: 'Sistema', email: 'joaoabo@gmail.com' },
            to: [{ email: to }],
            subject,
            text: body
        });
        return true;
        
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        throw new Error("Erro ao enviar e-mail");
    }
}