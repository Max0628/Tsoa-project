//src index.ts
import express from 'express';
import router from './controller/todo';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const app = express();
const port = 3000;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo API',
      version: '1.0.0',
      description: 'A simple Express API for managing todos',
    },
  },
  apis: ['./controller/*.ts'], // 指定包含路由定義的文件路徑
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs)); // 將 Swagger UI 添加到 Express 應用程式中

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/todo', router);

app.listen(port, () => {
  console.log(`伺服器正在聆聽port${port}`);
});
