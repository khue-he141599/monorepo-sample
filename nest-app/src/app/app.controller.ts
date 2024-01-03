import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getData() {
    return this.appService.getData();
  }

  @Get('/api_v2')
  getDataV2() {
    return this.appService.getDataV2();
  }
}
