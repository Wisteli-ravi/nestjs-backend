import { Module } from '@nestjs/common';
import { UploadController } from './upload/upload.controller';
import { DocumentService } from './document.service';
import { Document } from './entities/document.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Document])],
  controllers: [UploadController],
  providers: [DocumentService],
})
export class DocumentModule {}
