// src/controllers/user.ts
import { Body, Controller, Get, Path, Post, Request, Route, Security } from 'tsoa';
import UserService from '../services/userService';



//根路徑"user"
@Route('user')
class UserController extends Controller {
  private readonly userService: UserService;
  constructor() {
    super();
    this.userService = new UserService();
  }


  //查詢單一成員資料
  @Security('jwt')
  @Get('{name}')
  public async getUser(@Path() name: string) {
    try {
      const userData = await this.userService.getUserDataFromModel(name);
      console.log(userData);
      return userData;
    } catch (error) {
      console.error(`Error fetching user data by name: ${error}`);
      this.setStatus(500);
      return { error: 'Internal server error' };
    }
  }


  @Security("jwt")
  @Get("profile")
  public async profile(@Request() req:any){
    return {
      user:req.user
    }
  }

  //登入系統,獲得token
  @Post('{login}')
  public async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    const token = await this.userService.getUserTokenFromModel(email, password);
    console.log(token);
    if (!token) throw new Error('Login failed.');
    return {
      data: token,
    };
  }



  //建立新成員
  @Post()
  public async createuser(@Body() requestBody: any) {
    const { name, email, password } = requestBody;
    return await this.userService.createUserDataFromModel(name, email, password);
  }
  
}

export { UserController };
