import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Discharge Summary')
@Controller('summary')
export class SummaryController {
  @Get()
  index(): string {
    return '';
  }
}
