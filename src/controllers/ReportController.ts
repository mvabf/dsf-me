import { Request, Response } from 'express';
import ProcessReportService from '../services/ProcessReportsService';

class ReportController {
    
    public async receiveLog(req: Request, res: Response): Promise<Response> {
        const { file } = req;

        if (!file)
            return res.status(400).json({ message: 'File not uploaded!' });

        ProcessReportService.processReports();

        return res.json({ report: 'generated' });
    }
}

export default new ReportController();