import { Controller, Get } from '@nestjs/common';
import { SystemService } from './system.service';

@Controller('api/system')
export class SystemController {
  constructor(private readonly systemService: SystemService) {}

  @Get()
  async getSystemInformation() {
    return this.systemService.getSystemInformation();
  }
}
