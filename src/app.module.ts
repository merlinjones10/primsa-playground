import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { InstrumentsModule } from './instruments/instruments.module';

@Module({
  imports: [PrismaModule, ArticlesModule, UsersModule, AuthModule, InstrumentsModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
