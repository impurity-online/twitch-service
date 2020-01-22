import { injectable } from 'inversify';
import Environment from '../util/environment';

@injectable()
export default class TwitchClientConfig {
    public baseUrl = 'https://api.twitch.tv/helix';
    public clientId = Environment.twitchClientId;
}
