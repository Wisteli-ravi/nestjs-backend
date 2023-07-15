import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Document {
  @ObjectIdColumn()
  _id: ObjectID | string;

  @PrimaryColumn()
  id: string;

  @ApiProperty({
    type: String,
  })
  ocrEngine: string;

  @ApiProperty({
    type: String,
  })
  processingType: string;

  @ApiProperty({
    type: String,
  })
  priority: string;

  @ApiProperty({
    type: String
  })
  documentName: string;

  @ApiProperty({
    type: String,
  })
  byeString: string;

  pid: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}



export interface IDocument {
  id: string;
  _id: ObjectID | string;
  pid: string;
  attr: [];
  files: [];
  documents: [];

  ocrEngine: string;
  processingType: string;
  documentName: string;
  byeString: string;
  
  
  createdBy: string;
  createdAt: string;
  updatedAt: string;

}



/*

 "identifierJson": {
        "claimId": "1201",
        "hospitalId": "1201",
        "claimType": "CASHLESS",
        "userId": null,
        "userParentType": null,
        "userParentId": null,
        "ocrEngine": "tesseract",
        "processingType": "0"
    }


*/
