import express from 'express';
import { createFireData, getFireData, getLastUpdate } from '../controller/BurnedController.js';
import { createForest, getForestData } from '../controller/ForestController.js';

const router = express.Router();

router.post('/createData', createFireData);
router.get('/getFireData', getFireData);
router.get('/getLastUpdate', getLastUpdate);

router.post('/createForest', createForest);
router.get('/getForestData', getForestData);

export default router;
