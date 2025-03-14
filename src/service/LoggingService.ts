import type { LogApi } from "../dto/request/LogApi";
import LogApiModel from "../model/LogApiModel";

export class LoggingService {

    static async saveLogApi(logApi: LogApi): Promise<void> {
        const logApiDocument = new LogApiModel(logApi);
        console.log('logApiDocument', logApiDocument);
        await logApiDocument.save(); // ✅ Lưu vào MongoDB
        console.log("✅ Log API saved:", logApi);
    }

}