///memberModel.ts
import prisma from '../libs/db';

class MemberModel {
  async findByName(name: string) {
    try {
      const members = await prisma.member.findFirst({ where: { name } });
      console.log(`data is : ${members}`);

      return members;
    } catch (error) {
      console.log(`can't find the data : ${error}`);
      return error;
    }
  }
}

export default MemberModel;
