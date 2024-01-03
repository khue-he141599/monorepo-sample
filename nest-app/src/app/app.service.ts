import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  getDataV2(): { message: string } {
    return { message: 'Hello API12121' };
  }
}
