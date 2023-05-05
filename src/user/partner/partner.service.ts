import { Injectable } from '@nestjs/common';
import { Repository, ObjectID } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IPartner, Partner } from './entities/partner.entity';

@Injectable()
export class PartnerService {
  constructor(
    @InjectRepository(Partner)
    private partnerRepository: Repository<IPartner>,
  ) {}

  create(createPartnerDto: IPartner) {
    return this.partnerRepository.save(createPartnerDto);
  }

  findAll() {
    return this.partnerRepository.find();
  }

  findOne(id: string) {
    return this.partnerRepository.findOneById(id);
  }

  update(id: string, updatePartnerDto: IPartner) {
    return this.partnerRepository.update(id, updatePartnerDto);
  }

  remove(id: string) {
    return this.partnerRepository.delete(id);
  }
}
