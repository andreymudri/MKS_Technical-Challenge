import { AuthDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { EntityManager, Repository } from 'typeorm';
import { User } from '../entity';
export declare class AuthService {
    private readonly userRepository;
    private readonly entityManager;
    private jwt;
    private config;
    constructor(userRepository: Repository<User>, entityManager: EntityManager, jwt: JwtService, config: ConfigService);
    login(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    signup(dto: AuthDto): Promise<{
        account: {
            email: string;
            hash: string;
        };
    }>;
    signToken(userId: number, email: string): Promise<{
        access_token: string;
    }>;
}
