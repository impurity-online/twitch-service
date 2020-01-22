import { Types } from './../config/container-types-config';
import { AxiosRequestConfig } from 'axios';
import { RestClient } from './rest-client';
import TwitchClientConfig from '../config/twitch-client-config';
import { injectable, inject } from 'inversify';

export default class TwitchClient extends RestClient {
    constructor(@inject(Types.TwitchClientConfig) private readonly twitchClientConfig: TwitchClientConfig) {
        super(twitchClientConfig.baseUrl);
    }

    protected onDecorate(config: AxiosRequestConfig): AxiosRequestConfig {
        config.headers = {
            'Client-ID': this.twitchClientConfig.clientId,
            ...config.headers,
        };
        return config;
    }
}
