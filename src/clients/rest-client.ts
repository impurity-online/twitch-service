import axios, { Method, AxiosRequestConfig } from 'axios';

export abstract class RestClient {
    protected readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public async makeRequest(method: Method, endpoint: string, data: AxiosRequestConfig): Promise<any> {
        if (endpoint[0] !== '/') {
            throw new Error("Endpoint must be prefixed with a '\\'");
        }
        return await axios({
            method,
            url: `${this.baseUrl}${endpoint}`,
            ...data,
        });
    }
}
