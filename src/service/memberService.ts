//src/service/memberService.ts

import MemberModel from '../models/memberModel';

class MemberService {
  memberModel = new MemberModel();

  public findByName(name: string) {
    return this.memberModel.findByName(name);
  }
}

export default MemberService;
