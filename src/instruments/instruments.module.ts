import { Module } from '@nestjs/common';
import { InstrumentsService } from './instruments.service';
import { InstrumentsController } from './instruments.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [InstrumentsController],
  providers: [InstrumentsService],
  imports: [PrismaModule],
})
export class InstrumentsModule {}
