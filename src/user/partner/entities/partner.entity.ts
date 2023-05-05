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

@Entity()
export class Partner {
  @ObjectIdColumn()
  _id: ObjectID | string;

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  phone: string;

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


