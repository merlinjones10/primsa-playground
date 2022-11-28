import { Instrument, Prisma } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class InstrumentEntity implements Instrument {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  value: Prisma.Decimal;

  @ApiProperty()
  ownerId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
