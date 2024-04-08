import { Router } from 'express';
import  Technology  from '../utils/technology';
const router = Router();

router.get('/hb1', (req, res) => {
    res.render('hb1', {
        mensagem: 'Olá, você está aprendendo Express + HBS!',
        layout: false,
    });
});
router.get('/hb2', (req, res) => {
  res.render('hb2', {
  poweredByNodejs: true,
  name: 'Express',
  type: 'Framework',
  layout: false,
  });
});

router.get('/hb3', (req, res) => {
  const sith = [
  { nome: 'Dart Vader'},
  { nome: 'Kylo Ren'},
  { nome: 'Palpatine'},
  { nome: 'Conde Dookan'}
  ];
  res.render('hb3', {sith, layout: false });
  });

  router.get('/hb4', (req, res) => {
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
  
    res.render('hb4', { technologies: nodejsTechnologies,layout: false });
  });
  

export default router;
