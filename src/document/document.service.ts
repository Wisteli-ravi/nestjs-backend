import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { IDocument, Document } from './entities/document.entity';

@Injectable()
export class DocumentService {
  constructor(
    @InjectRepository(Document)
    private repository: MongoRepository<IDocument>,
  ) {}

  create(createDto: IDocument) {
    console.log(createDto);
    return this.repository.save(createDto);
  }

  async findAll(): Promise<IDocument[]> {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneById(id);
  }

  update(id: string, updateDto: IDocument) {
    return this.repository.update(id, updateDto);
  }

  remove(id: string) {
    return this.repository.delete(id);
  }

}
