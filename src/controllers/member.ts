// src/controllers/member.ts
import { Body, Controller, Get, Path, Post, Route, Security } from 'tsoa';
import MemberService from '../services/memberService';

@Route('member')
class MemberController extends Controller {
  private readonly memberService: MemberService;

  constructor() {
    super();
    this.memberService = new MemberService();
  }
  //建立新成員
  @Security('jwt')
  @Post()
  public async createMember(@Body() requestBody: any) {
    const { name, email, password } = requestBody;
    return await this.memberService.createMemberData(name, email, password);
  }
  //查詢單一成員資料
  @Security('jwt')
  @Get('{name}')
  public async getUser(@Path() name: string) {
    try {
      const memberData = await this.memberService.getMemberData(name);
      console.log(memberData);
      return memberData;
    } catch (error) {
      console.error(`Error fetching member data by name: ${error}`);
      this.setStatus(500);
      return { error: 'Internal server error' };
    }
  }

  //登入系統,獲得token
  @Post('{login}')
  public async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    const token = await this.memberService.getUserToken(email, password);
    console.log(token);
    if (!token) throw new Error('Login failed.');
    return {
      data: token,
    };
  }
}

export { MemberController };
