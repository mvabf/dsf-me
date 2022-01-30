import report from '../schemas/Report'

class ReportRepository {
    async save(dataReport: Object) {
        await report.collection.insertOne(dataReport);
    }

    async list() {
        const data = report.find().lean();

        return data;
    }

    async generateConsumersCount() {
        const data = await report.aggregate([
            { "$group": { _id: "$data.authenticated_entity", count: { $sum: 1 } } }
        ]);

        return data;
    }

    async generateServicesCount() {
        const data = await report.aggregate([
            { "$group": { _id: "$data.service.id", count: { $sum: 1 } } }
        ]);

        return data;
    }

    async generateLatenciesAvg() {
        const data = await report.aggregate([
            {
                "$group": {
                    _id: "$data.service.id",
                    avg_proxy: { $avg: "$data.latencies.proxy" },
                    avg_request: { $avg: "$data.latencies.request" },
                    avg_gateway: { $avg: "$data.latencies.kong" }
                }
            }
        ]);

        return data;
    }
}

export default new ReportRepository();