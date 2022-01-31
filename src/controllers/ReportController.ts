import { Request, Response } from 'express';

import converter from 'json-2-csv';
import ProcessLogs from '../helpers/ProcessLogs';
import ReportRepository from '../repository/ReportRepository';

class ReportController {
    public async uploaded(req: Request, res: Response): Promise<Response> {
        const { file } = req;

        if (!file)
            return res.status(400).json({ message: 'File not uploaded!' });

        await ProcessLogs.processLog();

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