import express from 'express';
import { createFireData, getFireData } from '../controller/BurnedController.js';
import { createForest, getForestData } from '../controller/ForestController.js';

const router = express.Router();

// queimadas
router.post('/createData', createFireData);
router.get('/getFireData', getFireData);

// florestas
router.post('/createForest', createForest);
router.get('/getForestData', getForestData);

export default router;
