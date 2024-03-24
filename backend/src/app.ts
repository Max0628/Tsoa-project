//src/app.ts
import express, { json, urlencoded } from 'express';
import { RegisterRoutes } from './routes';
import swaggerDocument from '../swagger.json';
import swaggerUi from 'swagger-ui-express';
import { ValidateError } from 'tsoa';
import cors from 'cors';

const app = express();
const port = 3001;

// Use body parser to read sent json payloads
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

//swagger文件黨
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

RegisterRoutes(app);

//errowhandler
app.use((err: any, _req: any, res: any, next: any) => {
  if (err instanceof ValidateError) {
    res.json({ error: err.fields });
  }

  if (err instanceof Error) {
    res.json({ error: err.message });
  }
  next();
});

app.listen(port, () => {
  console.log(`伺服器正在監聽port ${port}`);
});

export default app;
