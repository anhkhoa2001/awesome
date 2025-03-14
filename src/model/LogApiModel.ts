import mongoose, { Schema, Document, type Date } from "mongoose";

interface ILogApi extends Document {
    uri: string;
    request: string;
    response: string;
    executeTime: number;
    method: string;
    statusCode: number;
    createAt: Date;
    header: string;
}

const LogApiSchema = new Schema<ILogApi>({
    uri: { type: String, required: true },
    request: { type: String, required: true},
    statusCode: { type: Number, required: true },
    executeTime: { type: Number, required: true },
    method: { type: String, required: true },
    response: { type: String, required: true },
    header: {type: String },
    createAt: { type: Date, default: Date.now() },
});

const LogApiModel = mongoose.model<ILogApi>("LogApi", LogApiSchema);

export default LogApiModel;
