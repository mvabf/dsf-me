import { Schema, model } from 'mongoose';

const ReportSchema = new Schema ({data: JSON});

export default model('report', ReportSchema);

