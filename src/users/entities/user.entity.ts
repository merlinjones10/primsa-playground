import { ApiProperty } from '@nestjs/swagger';
import { User, Instrument } from '@prisma/client';

export class UserEntity implements User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ required: true })
  password: string;

  @ApiProperty()
  instruments: Instrument[];
}
