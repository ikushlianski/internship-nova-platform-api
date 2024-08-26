// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { JwtService } from '@nestjs/jwt';
import { ParsedUserData } from 'apps/gateway/src/auth/auth.types';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findOrCreateUser(user: Partial<User>): Promise<User> {
    let existingUser = await this.usersRepository.findOne({ where: { email: user.email } });
    if (!existingUser) {
      existingUser = this.usersRepository.create(user);
      await this.usersRepository.save(existingUser);
    }
    return existingUser;
  }

  async updateTermsAcceptance(userId: number, acceptedTerms: boolean): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    user.hasAcceptedTerms = acceptedTerms;
    return await this.usersRepository.save(user);
  }

  async updateUser(userId: number, updatedData: Partial<User>): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    Object.assign(user, updatedData);
    return await this.usersRepository.save(user);
  }

  async deleteUser(userId: number): Promise<void> {
    const user = await this.usersRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    await this.usersRepository.delete(userId);
  }

  async findAllUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findUserById(userId: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return user;
  }
}



@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  
  async generateJwtToken(user: ParsedUserData) {
    if (!user) {
      throw new Error('User not found');
    }

    const payload = {
      email: user.email,
      name: user.name,
    };

    const jwt = this.jwtService.sign(payload, {
      expiresIn: '30d',
    });

    return { jwt };
  }

  async validateUser(email: string): Promise<any> {
    const user = await this.usersService.findOrCreateUser({ email });
    const payload = { email: user.email, sub: user.id };
    user.accessToken = this.jwtService.sign(payload);
    return user;
  }
}

