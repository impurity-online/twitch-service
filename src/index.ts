import env from './environment';
import express, { Request, Response } from 'express';

const app = express();
const port = env.port;

app.get('/', (request: Request, response: Response) => {
    console.log(request.body);
    console.log(response.status);
    response.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
