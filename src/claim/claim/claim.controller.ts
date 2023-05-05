import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('claim')
@Controller('claim')
export class ClaimController {
  @Get()
  index(): string {
    return 'claim';
  }

  @Get('/detail')
  detail(): string {
    return 'detail';
  }
}
