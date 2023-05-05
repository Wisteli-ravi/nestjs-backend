import { Module } from '@nestjs/common';
import { ThumbnailController } from './thumbnail/thumbnail.controller';
import { NotifyController } from './notify/notify.controller';

@Module({
  controllers: [ThumbnailController, NotifyController]
})
export class SseModule {}
