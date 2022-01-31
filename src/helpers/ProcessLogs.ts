import fs from 'fs';
import path from 'path';
import ReportRepository from '../repository/ReportRepository';


class ProcessLogs {
    public async processLog() {
        const logPath = path.resolve(__dirname, '..', '..', 'logs.txt');

        const allFileContents = fs.readFileSync(logPath, 'utf-8');

        const arr: any = [];

        allFileContents.split(/\r?\n/).forEach(line => {
            try {
                const data = JSON.parse(line);

                arr.push(data);

            } catch (error) {
                return;

            }
        });

        await ReportRepository.save(arr);
    }
}

export default new ProcessLogs();

