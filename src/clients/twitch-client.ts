import Environment from '../utils/environment';
import { RestClient } from './rest-client';
import { AxiosRequestConfig, Method } from 'axios';

export default class TwitchClient extends RestClient {
    private readonly clientId: string;

    constructor() {
        super('https://api.twitch.tv/helix');
        this.clientId = Environment.twitchClientId;
    }

    public async makeRequest(method: Method, endpoint: string, config: AxiosRequestConfig): Promise<any> {
        config.headers = {
            'Client-ID': this.clientId,
            ...config.headers,
        };
        return await super.makeRequest(method, endpoint, config);
    }
}
