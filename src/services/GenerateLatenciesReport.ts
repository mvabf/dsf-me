import { IGenerateReports } from "../interfaces/IGenerateReport";
import fs from 'fs';
import converter from 'json-2-csv';
import path from 'path';

import ReportRepository from "../database/repository/ReportRepository";

class GenerateLatenciesReport implements IGenerateReports {
    public async generateReport() {
        const data = await ReportRepository.generateLatenciesAvg();

        converter.json2csv(<any>data, (_, csv) => {
            fs.writeFileSync(`${this.getReportsPath()}/latencies_report.csv`, csv!, 'utf-8');
        });
    }

    public getReportsPath(): string {
        return path.resolve(__dirname, '..', '..', 'reports');
    }
}

export default new GenerateLatenciesReport();