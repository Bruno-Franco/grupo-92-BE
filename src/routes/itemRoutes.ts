import { Router, Request, Response } from 'express';

const router = Router();

router.post('/', (req: Request, res: Response) => {
  res.status(200).json({ menssagem: req.body });
});

export default router;
