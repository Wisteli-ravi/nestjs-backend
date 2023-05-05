import { ApiProperty } from '@nestjs/swagger';
import { IPartner } from '../entities/partner.entity';
import { ObjectID } from 'typeorm';

export class CreatePartnerDto implements IPartner {
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
