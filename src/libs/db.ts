//引入prisma客戶端
import { PrismaClient } from '@prisma/client';
//啟動客戶端
const prisma = new PrismaClient();

//匯出客戶端
export default prisma;
