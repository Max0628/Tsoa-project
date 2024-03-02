//src/app.ts
import express, { json, urlencoded } from 'express';
import { RegisterRoutes } from '../src/routes';

export const app = express();
const port = 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

//掛載middleware
// Use body parser to read sent json payloads
app.use(urlencoded({ extended: true }));
app.use(json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

RegisterRoutes(app);

app.listen(port, () => {
  console.log(`伺服器正在監聽port ${port}`);
});
