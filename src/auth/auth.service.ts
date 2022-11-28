import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(id: string, pass: string): Promise<any> {
    const user = await this.usersService.login(id);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
// TODO: add Hashing and Salting - https://docs.nestjs.com/security/authentication
