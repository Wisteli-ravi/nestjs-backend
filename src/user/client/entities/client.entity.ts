import { ApiProperty } from '@nestjs/swagger';
import { Partner } from 'src/user/partner/entities/partner.entity';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Client {
  @ObjectIdColumn()
  id: ObjectID;

  @ApiProperty({
    type: String
  })
  @Column()
  name: string;

  @ApiProperty({
    type: String
  })
  @Column()
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
  partner: Partner;

  @ApiProperty({
    type: String
  })
  @Column()
  isPublished: boolean;
}
