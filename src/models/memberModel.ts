//src/models/memberModel.ts

import prisma from '../libs/db';

class MemberModel {
  public async getMember(name: string, id?: number) {
    try {
      const member = await prisma.member.findFirst({ where: { name, id } });
      console.log(`data is : ${member}`);
      return member;
    } catch (error) {
      console.log(`can't find the data : ${error}`);
      return error;
    }
  }

  public async getPrivateData(email: string, password: string) {
    try {
      const memberPrivateData = await prisma.member.findFirst({
        where: { email, password },
      });
      return memberPrivateData;
    } catch (error) {
      console.log(`can't find memberPrivateData : ${error}`);
      return error;
    }
  }

  public async createMember(
    name: string,
    email: string,
    password: string,
    createAt: Date,
  ) {
    try {
      const newMember = await prisma.member.create({
        data: { name, email, password, createAt },
      });
      return newMember;
    } catch (error) {
      console.log(`error creating member: ${error}`);
      return error;
    }
  }
}
export default MemberModel;
