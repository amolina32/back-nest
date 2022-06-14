import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { securityController } from './controller/securityController';
import { securityService } from './service/securityService';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [securityController],
  providers: [securityService],
})
export class securityModule {}
