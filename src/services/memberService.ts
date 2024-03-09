//src/service/memberService.ts

//引入剛剛創建的會員模型
import MemberModel from '../models/memberModel';
import * as jwt from 'jsonwebtoken';
//創建會員資料操作邏輯，內有尋找會員資料，尋找會員私密資料，創建會員資料，三個函數
class MemberService {
  //創建新的會員模型，設定給變數memberModel
  public memberModel = new MemberModel();

  public async getMemberData(name: string, id?: number) {
    return await this.memberModel.getMember(name, id);
  }

  public async getUserToken(email: string, password: string) {
    const user = await this.memberModel.getLoginUser(email, password);
    console.log(user);
    if (!user) {
      console.log("cant't find user");
      return null;
    }
    //把找到的資料,跟'secret'字串,一起簽名行程token,設定過期時間為1小時
    const token = jwt.sign(user, 'secret', { expiresIn: 60 * 60 });

    return token;
  }

  public async createMemberData(name: string, email: string, password: string) {
    return await this.memberModel.createMember(name, email, password);
  }
}

export default MemberService;
//導出此class
