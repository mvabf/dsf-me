import { Router } from 'express';
import ReportController from '../controllers/ReportController';
import { fileUploadMiddleware } from '../middlewares/fileUploadMiddleware';

const reportRouter = Router();

reportRouter.post('/', fileUploadMiddleware('logs'), ReportController.uploaded);

export default reportRouter;