import express, { Router, Response, Requeste } from 'express';


const router: Router = express.Router();

// Rota GET /
router.get('/', (req: Request, res: Response) => {
  res.send('Olá Mundo!');
});

export default router;
