import { Router, Request, Response } from 'express';

const router = Router();

router.post('/', (req: Request, res: Response) => {
  console.log('>>>>>>>>>>', req.body);

  res.status(200).json({ message: 'Server 92 Routes Working!' });
});

export default router;
