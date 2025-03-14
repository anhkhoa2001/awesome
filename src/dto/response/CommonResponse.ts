
export class CommonResponse {
    code?: string;
    status?: number;
    data?: object;

    constructor(code: string,
        status: number,
        data: object
    ) {
        this.code = code;
        this.status = status;
        this.data = data;
    }
}