import 'dotenv/config';
import express, { Express } from 'express';
import swaggerUI from 'swagger-ui-express';
import { specs } from './configs/swaggerJsDoc';
import { sync as sequelizeSyncModels } from './models/sync';
import router from './routers';
import { errorHandler } from './utils/errorHandler';

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use('/api', router);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));
app.use(errorHandler);

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
