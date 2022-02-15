import { Router } from 'express';
import {
  getMeteors,
  getMeteor,
  updateMeteor,
  removeMeteor,
  addMeteor,
} from './controllers/meteors';

const router = Router();

router.get('/meteorites', getMeteors);
router.get('/meteorites/:id', getMeteor);
router.put('/meteorites/:id', updateMeteor);
router.post('/meteorites', addMeteor);
router.delete('/meteorites/:id', removeMeteor);

export default router;
