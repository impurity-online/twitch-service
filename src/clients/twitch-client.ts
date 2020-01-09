import Client from './client';
import Environment from '../utils/environment';

export default class TwitchClient implements Client {
    private readonly clientId: string;

    constructor() {
        this.clientId = Environment.twitchClientId;
    }

    makeRequest<T>(url: string): Promise<T> {
        throw new Error('Method not implemented.');
    }
}
