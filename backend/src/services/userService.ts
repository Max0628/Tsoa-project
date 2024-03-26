//src/service/userService.ts

//引入剛剛創建的會員模型
import UserModel from '../models/userModel';
import * as jwt from 'jsonwebtoken';
//創建會員資料操作邏輯，內有尋找會員資料，尋找會員私密資料，創建會員資料，三個函數
class UserService {
  //創建新的會員模型，設定給變數userModel
  public userModel = new UserModel();

  //使用姓名跟id去尋找會員資料，透過userModel搜尋會員資料
  public async getUserDataFromModel(name: string) {
    return await this.userModel.getUserFromPrisma(name);
  }

  //使用信箱,密碼到userModel搜尋會員，如果會員存在，用user只做jwt，並且return
  public async getUserTokenFromModel(email: string, password: string) {
    const user = await this.userModel.getLoginUserFromPrisma(email, password);
    console.log(user);
    if (!user) {
      console.log("cant't find user");
      return null;
    }
    //把找到的資料,跟'secret'字串,一起簽名行程token,設定過期時間為1小時
    const token = jwt.sign(user, 'JWT_SECRET', {
      expiresIn: 60 * 60,
    });

    return token;
  }

  //輸入姓名,信箱,密碼創建會員
  public async createUserDataFromModel(name: string, email: string, password: string) {
    return await this.userModel.createUserToPrisma(name, email, password);
  }
}

export default UserService;
//導出此class
