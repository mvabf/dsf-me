import { Request, Response } from 'express';
import ProcessLogs from '../helpers/ProcessLogs';
import ReportRepository from '../repository/ReportRepository';
import consumerReport from '../services/GenerateConsumersReport';

class ReportController {
    public async uploaded(req: Request, res: Response): Promise<Response> {
        const { file } = req;

        if (!file)
            return res.status(400).json({ message: 'File not uploaded!' });

        await ProcessLogs.processLog();
        await consumerReport.generateReport();

        return res.json({ saved: true });
    }

    public async listRegisters(req: Request, res: Response): Promise<Response> {
        // const data = await ReportRepository.list();
        const data = await ReportRepository.generateConsumersCount();
        // const data = await ReportRepository.generateServicesCount();
        // const data = await ReportRepository.generateLatenciesAvg();

        return res.json(data);
    }

}

export default new ReportController();