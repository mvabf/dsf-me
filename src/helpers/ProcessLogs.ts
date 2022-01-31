import fs from 'fs';
import path from 'path';
import ReportRepository from '../database/repository/ReportRepository';
import { directoryExists } from './createReportFolder';


class ProcessLogs {
    public async processLog() {
        const logPath = path.resolve(__dirname, '..', '..', 'logs.txt');

        const allFileContents = fs.readFileSync(logPath, 'utf-8');

        const logData: any = [];

        allFileContents.split(/\r?\n/).forEach(line => {
            try {
                const data = JSON.parse(line);

                logData.push(data);

            } catch (error) {
                return;
            }
        });

        await ReportRepository.save(logData);

        directoryExists();
    }
}

export default new ProcessLogs();

