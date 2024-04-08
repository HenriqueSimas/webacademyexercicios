import { Router } from 'express';
import mainController from '../controllers/main';
const router = Router();

// Main Controller
router.get('/', mainController.index);
router.get('/hb1', mainController.hb1);

export default router;
