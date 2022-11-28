import { ApiProperty } from '@nestjs/swagger';

export class CreateInstrumentDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  value: number;

  @ApiProperty()
  ownerId: number;
}
