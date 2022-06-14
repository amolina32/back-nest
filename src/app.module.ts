import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { securityModule } from './modules/security/securityModule';

@Module({
  imports: [ScheduleModule.forRoot(), securityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
