import { Router } from 'express';
import reportRouter from './report.routes';

const router = Router();

router.use('/report', reportRouter);

export default router;