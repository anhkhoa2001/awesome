export class LogApi {
    id?: number;
    uri: string;
    request: string;
    response: string;
    executeTime: number;
    method: string;
    statusCode: number;
    header: string;

    constructor(
        uri: string,
        request: string,
        response: string,
        executeTime: number,
        method: string,
        statusCode: number,
        header: string
    ) {
        this.uri = uri;
        this.response = response;
        this.request = request;
        this.executeTime = executeTime;
        this.method = method;
        this.statusCode = statusCode;
        this.header = header;
    }
}