import fs from 'fs';
import path from 'path';
import ReportRepository from '../repository/ReportRepository';


class ProcessLogs {
    public async processLog() {
        const logPath = path.resolve(__dirname, '..', '..', 'public', 'uploads', 'logs.txt');

        const allFileContents = fs.readFileSync(logPath, 'utf-8');

        allFileContents.split(/\r?\n/).forEach(async (line) => {
            const data = JSON.parse(line);

            await ReportRepository.save({ data: data });
        });
    }
}

export default new ProcessLogs();

