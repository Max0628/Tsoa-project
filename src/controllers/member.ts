// src/controllers/member.ts
import { Body, Controller, Get, Post, Request, Route, Security } from 'tsoa';
import MemberService from '../services/memberService';

@Route('member')
class MemberController extends Controller {
  private readonly memberService: MemberService;

  constructor() {
    super();
    this.memberService = new MemberService();
  }

  // @Get('{name}')
  // public async getMemberByName(@Path() name: string, @Query() id?: number) {
  //   return await this.memberService.getMember(name, id);
  // }

  @Post()
  public async createMember(@Body() requestBody: any) {
    const { name, email, password, createAt } = requestBody;
    return await this.memberService.createMember(
      name,
      email,
      password,
      createAt,
    );
  }

  @Security('{jwt}')
  @Get('{name}')
  public async getUser(@Request() req: any, name: string) {
    console.log(req.user);
    return {
      user: req.user,
    };
  }

  @Post('{login}')
  public async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    const token = await this.memberService.getPrivateData(email, password);
    console.log({ token });
    if (!token) throw new Error('Login failed.');
    return {
      data: token,
    };
  }
}

export { MemberController };
