import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8daaa024c205f0",
    pass: "465853e464d36e"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Ícaro Santos <ica.spereira12@gmail.com>',
      subject: subject,
      html: body,
    })
  }
}
