import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import { IsUnique } from 'src/shared/is-qunique';


@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @IsUnique({ always: true, message: 'username already exists' })
  @Column({ unique: true })
  @ApiProperty({
    type: String,
  })
  username: string;

  @Column({ unique: true })
  @ApiProperty({
    type: String,
  })
  @IsUnique({ always: true, message: 'email already exists' })
  @IsEmail()
  //@UniqueOnDatabase(User)
  email: string;

  @Column()
  @ApiProperty({
    type: String,
  })
  phone: string;

  @Column()
  isPublished: boolean;

  @Column({ select: false })
  @ApiProperty({
    type: String,
  })
  password: string;
}
