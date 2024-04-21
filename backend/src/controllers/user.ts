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


  //user/name路由，用姓名查看個人資料
  @Security('jwt')
  @Get("{name}")
  public async getUser(@Path() name: string) {
    try {
      const userData = await this.userService.getUserDataFromModel(name);
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
    const user= req.user
    return user
  }

  //登入系統,獲得token
  @Post('login')
  public async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    const token = await this.userService.getUserTokenFromModel(email, password);
    if (!token) throw new Error('Login failed.');
    return {
      data: token,
    };
  }



  //建立新成員
  @Post()
  public async createUser(@Body() requestBody: any) {
    const { name, email, password } = requestBody;
    const newUser =  await this.userService.createUserDataFromModel(name, email, password);
    console.log(`newUser:${newUser}`);
    return {newUser};
  }
  
}

export { UserController };
