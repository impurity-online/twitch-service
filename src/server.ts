import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as dotenv from 'dotenv';

dotenv.config();
const port: number = parseInt(process.env.port) || 8080;
const app: Koa = new Koa();

app.use(async (ctx, next) => {
    console.log('Url:', ctx.url);
    await next();
});

const router = new Router();
router.get('/*', async ctx => {
    ctx.body = 'Hello World!';
});
app.use(router.routes());

app.listen(port);

console.log(`Server running - port:${port} - nodeEnv:${process.env.nodeEnv}`);
