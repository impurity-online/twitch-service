import Router = require('koa-router');

export default interface Controller {
    mount(router: Router): void;
}
