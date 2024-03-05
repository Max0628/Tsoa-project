//src/app.ts
import express, { json, urlencoded } from 'express';
import { RegisterRoutes } from '../src/routes';
import swaggerDocument from '../swagger.json';
import swaggerUi from 'swagger-ui-express';

const app = express();
const port = 3000;

// Use body parser to read sent json payloads
app.use(urlencoded({ extended: true }));
app.use(json());

//swagger文件黨
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

RegisterRoutes(app);

//errowhandler

app.listen(port, () => {
  console.log(`伺服器正在監聽port ${port}`);
});

export default app;
