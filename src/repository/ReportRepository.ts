import report from '../schemas/Report'

class ReportRepository {
    async save(dataReport: any) {
             await report.collection.insertMany(dataReport);
    }

    async generateConsumersCount() {
        const data = await report.aggregate([
            { "$group": { _id: "$authenticated_entity", count: { $sum: 1 } } }
        ]);

        return data;
    }

    async list() {
        const data = report.find().lean();

        return data;
    }

    async generateServicesCount() {
        const data = await report.aggregate([
            { "$group": { _id: "$service.id", count: { $sum: 1 } } }
        ]);

        return data;
    }

    async generateLatenciesAvg() {
        const data = await report.aggregate([
            {
                "$group": {
                    _id: "$service.id",
                    avg_proxy: { $avg: "$latencies.proxy" },
                    avg_request: { $avg: "$latencies.request" },
                    avg_gateway: { $avg: "$latencies.kong" }
                }
            }
        ]);

        return data;
    }
}

export default new ReportRepository();