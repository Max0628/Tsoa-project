// src/controllers/member.ts

import { Controller, Get, Path, Route } from 'tsoa';
import MemberService from '../services/memberService';

@Route('member')
class MemberController extends Controller {
  private readonly memberService: MemberService;

  constructor() {
    super();
    this.memberService = new MemberService();
  }

  @Get('{name}')
  public async getUser(@Path() name: string) {
    const member = await this.memberService.findByName(name);
    return member;
  }
}

export default MemberController;
