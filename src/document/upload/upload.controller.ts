import {
  Controller,
  UploadedFile,
  Post,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Document, IDocument } from '../entities/document.entity';
import { DocumentService } from '../document.service';
import { CreateDocumentDto } from '../dto/create-document.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('document')
@Controller('document')
export class UploadController {
  constructor(private readonly documentService: DocumentService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @Body() body: CreateDocumentDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    this.documentService.create(body);
    return {
      body,
      file: file.buffer.toString(),
    };
  }
}
