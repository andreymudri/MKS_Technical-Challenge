import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly entityManager: EntityManager,
    private config: ConfigService,
    private jwt: JwtService,
  ) {}
  async login(dto: AuthDto) {
    const user = await this.userRepository.findOne({
      where: {
        email: dto.email,
      },
      select: {
        id: true,
        hash: true,
        email: true,
      },
    });
    if (!user) {
      throw new ForbiddenException('Invalid credentials');
    }
    const hashCheck = await argon.verify(user.hash, dto.password);
    if (!hashCheck) {
      throw new ForbiddenException('Invalid credentials');
    }
    return this.signToken(user.id, user.email);
  }

  async signup(dto: AuthDto) {
    try {
      const hash = await argon.hash(dto.password);
      const user = {
        email: dto.email,
        hash,
      };
      await this.entityManager
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
          email: dto.email,
          hash,
        })
        .returning('*')
        .execute();

      delete user.hash;
      return { account: user };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ForbiddenException('Credentials taken');
      }

      throw error;
    }
  }
  async signToken(userId: number, email: string) {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15d',
      secret: secret,
    });
    return { access_token: token };
  }
}
