import { Client } from './entities/client.entity';
import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

@Injectable()
export class ClientService {

  constructor(
    @InjectRepository(Client)
    private clientRepository: MongoRepository<Client>,
  ) {}

  create(createClientDto: CreateClientDto) {
    return this.clientRepository.save(createClientDto);
  }

  async findAll(): Promise<Client[]> {
    return this.clientRepository.find();
  }

  findOne(id: string) {
    return this.clientRepository.findOneById(id);
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    return this.clientRepository.update(id, updateClientDto);
  }

  remove(id: string) {
    return this.clientRepository.delete(id);
  }
}
