import environment from './environment';
import express, { Request, Response } from 'express';
var fs = require('fs');
var https = require('https');

const app = express();
const port = environment.port;

if (environment.node_env === 'local') {
    https
        .createServer(
            {
                key: fs.readFileSync('server.key'),
                cert: fs.readFileSync('server.cert'),
            },
            app,
        )
        .listen(3000, () => console.log(`Example app listening on port ${port}!`));
} else {
    app.get('/', (request: Request, response: Response) => {
        console.log(request.body);
        console.log(response.status);
        response.send('Hello World!');
    });

    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}
