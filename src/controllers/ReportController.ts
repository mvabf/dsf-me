import { Request, Response } from 'express';
import ProcessLogs from '../helpers/ProcessLogs';
import ReportRepository from '../database/repository/ReportRepository';
import consumersReport from '../services/GenerateConsumersReport';
import servicesReport from '../services/GenerateServicesReport';
import latenciesReport from '../services/GenerateLatenciesReport';

class ReportController {
    public async uploaded(req: Request, res: Response): Promise<Response> {
        const { file } = req;

        if (!file)
            return res.status(400).json({ message: 'File not uploaded!' });

        await ProcessLogs.processLog();
        await servicesReport.generateReport();
        await latenciesReport.generateReport();
        await consumersReport.generateReport();

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