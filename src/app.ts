import 'dotenv/config';
import express, { Express, Request, Response } from 'express';
import { sync as sequelizeSyncModels } from './models/sync';

const app: Express = express();
const port = process.env.PORT || 8080;

app.get('/', async (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

sequelizeSyncModels()
  .then(() => {
    app.listen(port, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${port}`
      );
    });
  })
  .catch(() => {
    console.error(
      `[server]: Something went wrong while starting the application`
    );
  });
