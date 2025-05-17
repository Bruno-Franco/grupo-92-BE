import express from 'express';
import itemRoutes from './routes/itemRoutes';
import cors from 'cors';

const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000', // URL do seu frontend Next.js
    credentials: true,
    methods: ['GET', 'POST'],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', itemRoutes);

export default app;
