import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Repository, EntityManager } from 'typeorm';
import { MovieDto } from './dto';
import { Movie } from '../entity';
import RedisClient from 'ioredis';

@Injectable()
export class MovieService {
  redisClient: RedisClient;
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
    private readonly entityManager: EntityManager,
    private config: ConfigService,
  ) {
    if (!this.redisClient || !this.redisClient.status) {
      this.redisClient = new RedisClient();
      this.redisClient.connect(this.config.get('REDIS_URL'));
    }
  }
  create(createMovieDto: MovieDto) {
    const CreateMovie = this.movieRepository.create(createMovieDto);
    return this.entityManager.save(CreateMovie);
  }

  findAll() {
    return this.movieRepository.find();
  }

  findOne(id: number) {
    return this.movieRepository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateMovieDto: MovieDto) {
    const movieToUpdate = this.movieRepository.create(updateMovieDto);
    return this.movieRepository.update(id, movieToUpdate);
  }

  remove(id: number) {
    return this.movieRepository.delete(id);
  }
}
