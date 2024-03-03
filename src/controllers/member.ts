//src/controllers/member.ts
import { Controller, Get, Path, Query, Route } from 'tsoa';
import MemberService from '../services/memberService';

@Route('member')
export class MemberController extends Controller {
  private readonly memberService: MemberService;

  constructor() {
    super();
    this.memberService = new MemberService();
  }

  @Get('{name}')
  public async getUser(@Path() name: string, @Query() id?: number) {
    return {
      name,
      id,
    };
  }
}
