
import mongoose from "mongoose";

mongoose.connect("mongodb://report:report@db:27017/report?authSource=admin");

mongoose.connection.on('error', () => console.error('connection error: '));
mongoose.connection.once('open', () => console.log('database connected!'));