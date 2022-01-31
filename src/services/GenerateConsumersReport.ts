import { IGenerateReports } from "../interfaces/IGenerateReport";
import fs from 'fs';
import converter from 'json-2-csv';

class GenerateConsumersReport implements IGenerateReports {
    public async generateReport(data: any) {
        converter.json2csv(data, (_, csv) => {
            fs.writeFileSync('consumers_report.csv', csv!, 'utf-8');
        });
    }
}