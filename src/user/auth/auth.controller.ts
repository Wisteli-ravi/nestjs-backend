import { Body,
   Controller,
   Get,
   Post,
   Request,
   UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { User } from '../user/entities/user.entity';
import { Login } from './entities/login.entity';

@ApiTags('auth')
@Controller({
  path: 'auth',
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() req: Login) {
    //console.log(req.user);
    return this.authService.login(req);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('/refresh')
  refresh(): string {
    return 'refresh token';
  }

  @Post('/reset-password')
  resetPassword(): string {
    return 'some text';
  }
}
