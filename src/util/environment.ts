export default class Environment {
    public static get twitchClientId(): string {
        return Environment.getEnvironmentVariable('twitchClientId');
    }

    public static getEnvironmentVariable(key: string, fallback?: string): string {
        const environmentVariable = process.env[key];
        if (environmentVariable) {
            return environmentVariable;
        } else if (fallback) {
            return fallback;
        }
        throw new Error(`No environment variable set for ${key}`);
    }
}
