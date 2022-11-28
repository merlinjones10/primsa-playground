import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(id: string, pass: string): Promise<any> {
    console.log('im running');

    const user = await this.usersService.loginCreds(id);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id };
    console.log(payload);

    return {
      access_token: this.jwtService.sign(payload, { secret: 'secretKey' }),
    };
  }
}
// TODO: add Hashing and Salting - https://docs.nestjs.com/security/authentication
