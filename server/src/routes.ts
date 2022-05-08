import express from 'express';
import nodemailer from 'nodemailer'
import { prisma } from './prisma'
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case'

export const routes = express.Router();

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8daaa024c205f0",
    pass: "465853e464d36e"
  }
});

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  })

  /*transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Ícaro Santos <ica.spereira12@gmail.com>',
    subject: 'Novo feedback',
    html: [
      '<div style="font-family: sans-serif; font-size: 16px; color:#111;">',
      `<p>Tipo de feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      '</div>'
    ].join('\n')
  })*/

  return res.status(201).send();
})

