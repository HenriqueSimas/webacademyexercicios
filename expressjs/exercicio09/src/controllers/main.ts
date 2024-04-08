import { Request, Response } from 'express';
import  Technology  from '../utils/technology';

const index = (req: Request, res: Response) => {
    res.render('main/',{
        mensagem: 'Página Inicial',
        layout: false,
    });
}

const hb1 = (req: Request, res: Response) => {
    res.render('main/hb1',{
        mensagem: 'Olá, você está aprendendo Express + HBS!',
        layout: false,
    });
}

const hb2 = (req:Request, res: Response) => {
    res.render('main/hb2',{
        poweredByNodejs: true,
        name: 'Express',
        type: 'Framework',
        layout: false,
  });
}

const hb3 = (req:Request, res:Response) => {
    const sith = [
        { nome: 'Dart Vader'},
        { nome: 'Kylo Ren'},
        { nome: 'Palpatine'},
        { nome: 'Conde Dookan'}
    ];
    res.render('main/hb3', { sith, layout: false });
};

const hb4 = (req:Request, res: Response) => {
    const technologies: Technology[] = [
        { name: 'Express', type: 'Framework', poweredByNodejs: true },
        { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
        { name: 'React', type: 'Library', poweredByNodejs: true },
        { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
        { name: 'Django', type: 'Framework', poweredByNodejs: false },
        { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
        { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
        
      ];
    
      const nodejsTechnologies = technologies.filter(tech => tech.poweredByNodejs);
    
      res.render('main/hb4', { technologies: nodejsTechnologies,layout: false });
}

export default {index, hb1,hb2,hb3,hb4}