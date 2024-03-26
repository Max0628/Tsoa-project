//src/models/userModel.ts
import prisma from '../libs/db';

//創建會員模型class，跟prisma schema溝通
class UserModel {
  //用名稱找到會員資料
  public async getUserFromPrisma(name: string) {
    try {
      const user = await prisma.user.findFirst({ where: { name } });
      console.log(`userData is : ${user}`);
      return user;
    } catch (error) {
      console.log(`can't find the userData : ${error}`);
      return error;
    }
  }

  //使用email,passowrd藉由prisma到db撈資料
  public async getLoginUserFromPrisma(email: string, password: string) {
    try {
      const loginData = await prisma.user.findFirst({ where: { email, password } });
      console.log(`loginData is: ${loginData}`);
      return loginData;
    } catch (error) {
      console.log(`can't find loginData : ${error}`);
      return error
    }
  }

  //創建新會員資料，輸入參數name,email,password
  public async createUserToPrisma(name: string, email: string, password: string) {
    try {
      const newUser = await prisma.user.create({
        data: { name, email, password },
      });
      return newUser;
    } catch (error) {
      console.log(`error creating user: ${error}`);
      return error;
    }
  }
}
export default UserModel;
//導出此class
