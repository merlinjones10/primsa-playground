import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(id: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(+id);
    if (user && user.password === pass) {
      const { password, ...everythingElse } = user;
      return everythingElse;
    }
    return null;
  }
}
