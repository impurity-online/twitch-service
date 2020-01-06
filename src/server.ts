import * as Koa from 'koa';
import * as Router from 'koa-router';

const app = new Koa();

app.use(async (ctx, next) => {
    console.log('Url:', ctx.url);
    await next();
});

const router = new Router();
router.get('/*', async ctx => {
    ctx.body = 'Hello World!';
});
app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');
