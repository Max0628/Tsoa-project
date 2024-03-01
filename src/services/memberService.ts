//src/service/memberService.ts
import Member from '../models/memberModel';

//引入模型
//使用導入的Member interface,用pick方法製作出新的type，並用export導出
export type ModelCreationParams = Pick<
  Member,
  'name' | 'email' | 'password' | 'createAt'
>;

//製作class，叫做ModelService，並且導出
export class ModelService {
  public get(id: number, name?: string): Member {
    return {
      id,
      email: '',
      name: '',
      password: '',
      createAt: new Date(),
    };
  }

  public create(ModelCreationParams: ModelCreationParams): Member {
    return {
      id: Math.floor(Math.random() * 10000),
      ...ModelCreationParams,
    };
  }
}
