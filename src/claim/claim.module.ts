import { Module } from '@nestjs/common';
import { ClaimController } from './claim/claim.controller';
import { AoiController } from './aoi/aoi.controller';
import { SummaryController } from './summary/summary.controller';
import { ImageController } from './image/image.controller';

@Module({
  controllers: [ClaimController, AoiController, SummaryController, ImageController]
})
export class ClaimModule {}
