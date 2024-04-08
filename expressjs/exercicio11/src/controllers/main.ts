import { Request, Response } from 'express';

const index = (req: Request, res: Response) => {
  res.render('main/',{
      mensagem: 'Página Inicial',
  });
}

const hb1 = (req: Request, res: Response) => {
  res.render('main/hb1',{
      mensagem: 'Olá, você está aprendendo Express + HBS!',
  });
}
export default {index, hb1}