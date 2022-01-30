import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import report from '../schemas/Report';

class ReportController {
    public async uploaded(req: Request, res: Response): Promise<Response> {
        const { file } = req;

        if (!file) 
            return res.status(400).json({ message: 'File not uploaded!' });
        
        const logPath = path.resolve(__dirname, '..', '..', 'public', 'uploads', 'logs.txt');

        const allFileContents = fs.readFileSync(logPath, 'utf-8');

        allFileContents.split(/\r?\n/).forEach(async (line) => {
            const data = JSON.parse(line);

            await report.create({data: data});
        });

        return res.json({saved: true});
    }

    public async listRegisters(req: Request, res: Response): Promise<Response> {
        const data = await report.find();

        return res.json(data);
    }

}

export default new ReportController();