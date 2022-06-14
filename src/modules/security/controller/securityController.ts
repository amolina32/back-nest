import { Controller, Get, Param, Query } from '@nestjs/common';
import { securityService } from '../service/securityService';

@Controller()
export class securityController {
  constructor(private readonly securityService: securityService) {}

  @Get('/get-user-menu/:id')
  getMenu(@Param('id') id: string) {
    return this.securityService.getUserMenu(id);
  }
}
