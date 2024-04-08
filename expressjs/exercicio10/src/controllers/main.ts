import { Request, Response } from 'express';
import { text } from 'stream/consumers';

const navbar = (req: Request, res: Response) => {
  res.render('main/navbar', {});
};

const menul = (req: Request, res: Response) => {
    res.render('main/menul', {});
  };

  const menur = (req: Request, res: Response) => {
    res.render('main/menur', {});
  };

  const conteudo = (req: Request, res: Response) =>{
    res.render('main/conteudo',{
        text: 'Esse é o conteudo!'
    });
  }
export default {navbar,menul,conteudo, menur}