import { HashService } from './../../shared/hash.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { Login } from './entities/login.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private hashService: HashService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    console.log('username');
    const user = await this.userService.findOnyByUserId(username);
    if (user && (await this.hashService.comparePassword(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: Login) {
    const payload = { username: user.username, sub: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}