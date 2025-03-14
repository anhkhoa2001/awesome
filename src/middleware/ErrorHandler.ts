import type { Request, Response, NextFunction } from "express";
import { LogApi } from "../dto/request/LogApi";
import { LoggingService } from "../service/LoggingService";
import { CommonResponse } from "../dto/response/CommonResponse";

// Global error handling middleware
const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('=====LOG ERROR======');

  const responseMessage = { message: "Something wrong" };
  const statusCode = 500;
  const wrappedResponse = new CommonResponse("ERROR", statusCode, responseMessage);

  const logApi = new LogApi(req.originalUrl, JSON.stringify(req.body), '', 0, req.method, res.statusCode, JSON.stringify(req.headers));    
  logApi.response = JSON.stringify(wrappedResponse);
  logApi.statusCode = statusCode;
  LoggingService.saveLogApi(logApi);

  res.status(statusCode).json(wrappedResponse);
};

export { errorHandler };
