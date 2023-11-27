import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RedisClientType, createClient } from 'redis';

@Injectable()
export class RedisService {
  redisClient: RedisClientType;

  constructor(private config: ConfigService) {
    const redisOptions = {
      url: this.config.get('REDIS_URL'),
    };

    this.redisClient = createClient(redisOptions);

    (async () => {
      // eslint-disable-next-line no-console
      console.log('Connecting redis...');
      await this.redisClient.connect();
    })();
  }
}
