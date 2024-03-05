// src/controllers/member.ts

import { Body, Controller, Get, Path, Post, Query, Route } from 'tsoa';
import MemberService from '../services/memberService';

@Route('member')
class MemberController extends Controller {
  private readonly memberService: MemberService;

  constructor() {
    super();
    this.memberService = new MemberService();
  }

  @Get('{name}')
  public async getMemberByName(@Path() name: string, @Query() id?: number) {
    return await this.memberService.getMember(name, id);
  }

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
}

export { MemberController };
