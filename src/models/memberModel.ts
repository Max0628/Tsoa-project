//src/models/memberModel.ts

//製作一個叫做Member的interface,並且把它導出
export interface Member {
  id: number;
  name: string;
  email: string;
  password: string;
  createAt: Date;
}

export default Member;
