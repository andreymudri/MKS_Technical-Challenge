import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import RedisClient from 'ioredis';

@Injectable()
export class RedisService {
  redisClient: RedisClient;

  constructor(private config: ConfigService) {
    if (!this.redisClient || !this.redisClient.status) {
      this.redisClient = new RedisClient();
      this.redisClient.connect(this.config.get('REDIS_URL'));
    }
  }
}
