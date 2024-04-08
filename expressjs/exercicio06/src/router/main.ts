import express, { Router } from 'express';
import { Request, Response } from 'express-serve-static-core';

const router: Router = express.Router();

// Rota GET /
router.get('/', (req: Request, res: Response) => {
  res.send('Olá Mundo!');
});

export default router;
