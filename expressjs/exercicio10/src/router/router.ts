import { Router } from 'express';
import mainController from '../controllers/main';
const router = Router();

// Main Controller
router.get('/navbar', mainController.navbar);
router.get('/menul', mainController.menul);
router.get('/menur', mainController.menur);
router.get('/conteudo', mainController.conteudo);
export default router;
