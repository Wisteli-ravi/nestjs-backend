import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Client {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  isPublished: boolean;
}
