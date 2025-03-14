
import type { Request, Response, NextFunction } from "express";
import { CommonResponse } from "../dto/response/CommonResponse";

export const responseWrapper = (req: Request, res: Response, next: NextFunction) => {
    // Ghi đè `res.json` để wrap response
    const originalJson = res.json;

    res.json = function (data: any) {
        const wrappedResponse = new CommonResponse("SUCCESS", res.statusCode, data);
        return originalJson.call(this, wrappedResponse);
    };

    next();
};
