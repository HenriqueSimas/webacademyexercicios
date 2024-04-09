import { Router } from 'express';
import mainController from '../controllers/main';
import produtoController from "../controllers/produto"
const router = Router();

// Main Controller
//router.get('/', mainController.index);
router.get('/hb1', mainController.hb1);

router.get('/', produtoController.index);
router.post('/', produtoController.index);
router.get('/produto', produtoController.index);
router.post('/produto', produtoController.index);
router.get('/produto/create', produtoController.create);
router.post('/produto/create', produtoController.create);
router.get('/produto/:id', produtoController.read);
router.post('/produto/:id', produtoController.read);
router.get('/produto/update/:id', produtoController.update);
router.post('/produto/update/:id', produtoController.update);
router.get('/produto/remove/:id', produtoController.remove);
router.post('/produto/remove/:id', produtoController.remove);


export default router;
