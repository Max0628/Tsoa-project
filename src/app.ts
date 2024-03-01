//src/app.ts
import { PrismaClient } from '@prisma/client';
import express, { json, urlencoded } from 'express';
export const app = express();
const port = 3000;
const prisma = new PrismaClient();

//掛載middleware
// Use body parser to read sent json payloads
app.use(urlencoded({ extended: true }));
app.use(json());

app.listen(port, () => {
  console.log(`伺服器正在監聽port ${port}`);
});
