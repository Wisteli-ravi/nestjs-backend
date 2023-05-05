import { Controller, Get } from '@nestjs/common';

@Controller('image')
export class ImageController {
  @Get()
  index(): string {
    return '';
  }
}
