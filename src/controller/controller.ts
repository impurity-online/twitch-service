import { Context, Next } from 'koa';
import { injectable } from 'inversify';

@injectable()
export default abstract class Controller {
    protected async response(context: Context, next: Next, statusCode: number, body: string): Promise<Next> {
        context.status = statusCode;
        context.body = body;
        return next();
    }
}
