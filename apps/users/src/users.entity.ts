// src/users/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column({ nullable: true })
  accessToken?: string;

  @Column({ default: false })
  hasAcceptedTerms: boolean; 
}


