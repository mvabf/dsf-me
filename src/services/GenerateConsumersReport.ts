import { IGenerateReports } from "../interfaces/IGenerateReport";
import fs from 'fs';
import converter from 'json-2-csv';

import ReportRepository from "../repository/ReportRepository";

class GenerateConsumersReport implements IGenerateReports {
    public async generateReport() {
        const data = await ReportRepository.generateConsumersCount();

        converter.json2csv(<any>data, (_, csv) => {
            fs.writeFileSync('consumers_report.csv', csv!, 'utf-8');
        });
    }
}

export default new GenerateConsumersReport();