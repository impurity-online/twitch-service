import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import IRestClient from './i-rest-client';

export abstract class RestClient implements IRestClient {
    constructor(protected readonly baseUrl: string) {}

    public async get<T>(endpoint: string, config: AxiosRequestConfig): Promise<T> {
        this.onValidate(endpoint);
        const decoratedConfig = this.onDecorate(config);
        return axios.get<T>(endpoint, decoratedConfig).then((response: AxiosResponse<T>) => this.onUnwrap<T>(response));
    }

    public async post<T>(endpoint: string, config: AxiosRequestConfig): Promise<T> {
        this.onValidate(endpoint);
        const decoratedConfig = this.onDecorate(config);
        return axios.post<T>(endpoint, decoratedConfig).then((response: AxiosResponse<T>) => this.onUnwrap<T>(response));
    }

    public async put<T>(endpoint: string, config: AxiosRequestConfig): Promise<T> {
        this.onValidate(endpoint);
        const decoratedConfig = this.onDecorate(config);
        return axios.put<T>(endpoint, decoratedConfig).then((response: AxiosResponse<T>) => this.onUnwrap<T>(response));
    }

    public async delete<T>(endpoint: string, config: AxiosRequestConfig): Promise<T> {
        this.onValidate(endpoint);
        const decoratedConfig = this.onDecorate(config);
        return axios.delete<T>(endpoint, decoratedConfig).then((response: AxiosResponse<T>) => this.onUnwrap<T>(response));
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
