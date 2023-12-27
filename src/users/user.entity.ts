import { Exclude } from 'class-transformer';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  // @Exclude()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with Id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Update user with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Remove update with id', this.id);
  }
}
