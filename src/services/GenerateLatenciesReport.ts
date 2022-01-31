import { IGenerateReports } from "../interfaces/IGenerateReport";
import fs from 'fs';
import converter from 'json-2-csv';

import ReportRepository from "../database/repository/ReportRepository";

class GenerateLatenciesReport implements IGenerateReports {
    public async generateReport() {
        const data = await ReportRepository.generateLatenciesAvg();

        converter.json2csv(<any>data, (_, csv) => {
            fs.writeFileSync('latencies_report.csv', csv!, 'utf-8');
        });
    }
}

export default new GenerateLatenciesReport();