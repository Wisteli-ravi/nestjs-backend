import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { User } from './entities/user.entity';
import { HashService } from 'src/shared/hash.service';

//export type User = any;

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repository: MongoRepository<User>,
    private hashService: HashService
  ) {}

  private readonly users = [
    {
      userId: 1,
      username: 'ravi',
      password: 'ravi',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  //async findOneOld(username: string): Promise<User | undefined> {
  //return this.users.find((user) => user.username === username);
  //}

  async create(user: User) {
    user.password = await this.hashService.hashPassword(user.password);
    return this.repository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneById(id);
  }

  findOnyByUserId(userId: string) {
    return this.repository.findOneBy({ username: userId });
  }

  update(id: string, user: User) {
    return this.repository.update(id, user);
  }

  remove(id: string) {
    return this.repository.delete(id);
  }
}
