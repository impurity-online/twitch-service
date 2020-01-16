import { AxiosRequestConfig } from 'axios';

export default interface IRestClient {
    get<T>(endpoint: string, config: AxiosRequestConfig): Promise<T>;
    post<T>(endpoint: string, config: AxiosRequestConfig): Promise<T>;
    put<T>(endpoint: string, config: AxiosRequestConfig): Promise<T>;
    delete<T>(endpoint: string, config: AxiosRequestConfig): Promise<T>;
}
