import { ApiProperty } from '@nestjs/swagger';
import { IDocument } from '../entities/document.entity';
import { ObjectID } from 'typeorm';

export class CreateDocumentDto implements IDocument {
  pid: string;
  attr;
  files;
  documents;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  ocrEngine: string;
  processingType: string;
  documentName: string;
  byeString: string;
  id: string;
  _id: string | ObjectID;
  isPublished: boolean;

  @ApiProperty({
    type: String,
  })
  name: string;

  @ApiProperty({
    type: String,
  })
  email: string;

  @ApiProperty({
    type: String,
  })
  phone: string;
}
