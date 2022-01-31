import ProcessLogs from '../helpers/ProcessLogs';
import consumersReport from '../services/GenerateConsumersReport';
import servicesReport from '../services/GenerateServicesReport';
import latenciesReport from '../services/GenerateLatenciesReport';

class ProcessReportService {
    public async processReports() {
        await ProcessLogs.processLog();
        await servicesReport.generateReport();
        await latenciesReport.generateReport();
        await consumersReport.generateReport();
    }
}

export default new ProcessReportService();