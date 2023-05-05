import { ObjectID } from 'typeorm';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PartnerService } from './partner.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { IPartner } from './entities/partner.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('partner')
@Controller('partner')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}

  @Post()
  create(@Body() partner: CreatePartnerDto) {
    return this.partnerService.create(partner);
  }

  @Get()
  findAll() {
    return this.partnerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partnerService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() partner: CreatePartnerDto) {
    return this.partnerService.update(id, partner);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partnerService.remove(id);
  }
}
