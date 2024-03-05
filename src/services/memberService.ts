//src/service/memberService.ts

import MemberModel from '../models/memberModel';

class MemberService {
  public memberModel = new MemberModel();

  public async getMember(name: string, id?: number) {
    return await this.memberModel.getMember(name, id);
  }

  public async createMember(
    name: string,
    email: string,
    password: string,
    createAt: Date,
  ) {
    return await this.memberModel.createMember(name, email, password, createAt);
  }
}

export default MemberService;
