import { injectable } from 'inversify';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import IRestClient from './i-rest-client';

@injectable()
export abstract class RestClient implements IRestClient {
    constructor(protected readonly baseUrl: string) {}

    public async get<T>(endpoint: string, config: AxiosRequestConfig): Promise<T> {
        this.onValidate(endpoint);
        const decoratedConfig: AxiosRequestConfig = this.onDecorate(config);
        const constructedUrl: string = this.onConstructUrl(this.baseUrl, endpoint);
        return axios.get<T>(constructedUrl, decoratedConfig).then((response: AxiosResponse<T>) => this.onUnwrap<T>(response));
    }

    public async post<T>(endpoint: string, config: AxiosRequestConfig): Promise<T> {
        this.onValidate(endpoint);
        const decoratedConfig: AxiosRequestConfig = this.onDecorate(config);
        const constructedUrl: string = this.onConstructUrl(this.baseUrl, endpoint);
        return axios.post<T>(constructedUrl, decoratedConfig).then((response: AxiosResponse<T>) => this.onUnwrap<T>(response));
    }

    public async put<T>(endpoint: string, config: AxiosRequestConfig): Promise<T> {
        this.onValidate(endpoint);
        const decoratedConfig: AxiosRequestConfig = this.onDecorate(config);
        const constructedUrl: string = this.onConstructUrl(this.baseUrl, endpoint);
        return axios.put<T>(constructedUrl, decoratedConfig).then((response: AxiosResponse<T>) => this.onUnwrap<T>(response));
    }

    public async delete<T>(endpoint: string, config: AxiosRequestConfig): Promise<T> {
        this.onValidate(endpoint);
        const decoratedConfig: AxiosRequestConfig = this.onDecorate(config);
        const constructedUrl: string = this.onConstructUrl(this.baseUrl, endpoint);
        return axios.delete<T>(constructedUrl, decoratedConfig).then((response: AxiosResponse<T>) => this.onUnwrap<T>(response));
    }

    protected onConstructUrl(baseUrl: string, endpoint: string): string {
        return `${baseUrl}${endpoint}`;
    }

    protected onUnwrap<T>(response: AxiosResponse<T>): T {
        return response.data;
    }

    protected onValidate(endpoint: string): void {
        if (endpoint[0] !== '/') {
            throw new Error("Endpoint must be prefixed with a '\\'");
        }
    }

    protected onDecorate(config: AxiosRequestConfig): AxiosRequestConfig {
        return config;
    }
}
