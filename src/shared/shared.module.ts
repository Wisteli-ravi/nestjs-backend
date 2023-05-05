import { Module } from '@nestjs/common';
import { IsUniqueConstraint } from './is-qunique';
import { HashService } from './hash.service';

@Module({
  providers: [IsUniqueConstraint, HashService],
  exports: [HashService]
})
export class SharedModule {}
