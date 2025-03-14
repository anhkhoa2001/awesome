import type { Request, Response, NextFunction } from "express";
import { LogApi } from "../dto/request/LogApi";
import { LoggingService } from "../service/LoggingService";

const logging = (req: Request, res: Response, next: NextFunction) => {
    let start = Math.floor(Date.now());
    console.log(req);
    const logApi = new LogApi(req.originalUrl, JSON.stringify(req.body), '', 0, req.method, res.statusCode, JSON.stringify(req.headers));    
    //response
    const originalSend = res.send;
    res.send = function (body) {
        logApi.response = body;
        return originalSend.call(this, body);
    };

    res.on("finish", () => {
        const end = Date.now(); // Thời gian kết thúc
        console.log('res', res);
        logApi.executeTime = end - start;
        LoggingService.saveLogApi(logApi);
    });
    next();
};


export { logging };