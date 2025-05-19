import { Router, Request, Response } from 'express';
const sendEmail = require('../email/send-email');

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const formData = await req.body;
    await sendEmail(formData);
    res.status(200).json({ mensagem: 'Email enviado com sucesso!!' });
  } catch (error) {
    console.error(`Erro ao enviar o email erro: ${error}!!`);
  }
});

export default router;
