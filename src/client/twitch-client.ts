import { AxiosRequestConfig } from 'axios';
import Environment from '../util/environment';
import IRestClient from './i-rest-client';
import { RestClient } from './rest-client';

export default class TwitchClient extends RestClient implements IRestClient {
    private readonly clientId: string;

    constructor() {
        super('https://api.twitch.tv/helix');
        this.clientId = Environment.twitchClientId;
    }

    protected onDecorate(config: AxiosRequestConfig): AxiosRequestConfig {
        config.headers = {
            'Client-ID': this.clientId,
            ...config.headers,
        };
        return config;
    }
}
