import { Router } from 'express';
// import mainController from '../controllers/main';
import produtoController from '../controllers/produto';

const routes = Router();

// routes.get('/hb1', mainController.hb1);
routes.get('/produto', produtoController.index);
routes.get('/produto/create', produtoController.create);
routes.post('/produto/create', produtoController.create);
routes.get('/produto/:id', produtoController.read);
routes.get('/produto/update/:id', produtoController.update);
routes.post('/produto/update/:id', produtoController.update);
routes.get('/produto/remove/:id', produtoController.remove);

export default routes;
