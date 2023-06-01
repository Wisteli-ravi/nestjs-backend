import {
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  PrimaryColumn,
} from 'typeorm';

import {
    Contains,
    IsInt,
    Length,
    IsEmail,
    IsFQDN,
    IsDate,
    Min,
    Max,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Partner {
  @ObjectIdColumn()
  _id: ObjectID | string;

  @PrimaryColumn()
  id: string;

  @ApiProperty({
    type: String
  })
  @Column()
  name: string;

  @ApiProperty({
    type: String
  })
  @Column({ unique: true })
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String
  })
  @Column()
  phone: string;

  @ApiProperty({
    type: String
  })
  @Column()
  isPublished: boolean;
}

export interface IPartner {
  id: string;
  _id: ObjectID | string;
  name: string;
  email: string;
  phone: string;
  isPublished: boolean;
}


