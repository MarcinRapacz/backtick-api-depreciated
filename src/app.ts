import 'dotenv/config';
import express, { Express } from 'express';
import { sync as sequelizeSyncModels } from './models/sync';
import router from './routers';

const app: Express = express();
const port = process.env.PORT || 8080;

app.use('/api', router);

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
