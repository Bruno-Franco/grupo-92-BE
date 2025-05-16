import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Routes Working!' });
});

router.post('/send-email', (req: Request, res: Response) => {
  try {
  } catch (error) {}
});

export default router;
