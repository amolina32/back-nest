import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval } from '@nestjs/schedule';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private readonly logger = new Logger(AppService.name);

  // @Cron(CronExpression.EVERY_10_SECONDS)
  // handleCron() {
  //   const date = new Date(Date.now());
  //   console.log(
  //     'Llamando cada 10 segundos con @Cron: ',
  //     date.getHours(),
  //     ':',
  //     date.getMinutes(),
  //     ':',
  //     date.getSeconds(),
  //   );
  // }

  // @Interval(10000)
  // handleInterval() {
  //   const date = new Date(Date.now());
  //   console.log(
  //     'Llamando cada 10 segundos con @Cron: ',
  //     date.getHours(),
  //     ':',
  //     date.getMinutes(),
  //     ':',
  //     date.getSeconds(),
  //   );
  // }
}
