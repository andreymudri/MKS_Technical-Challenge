import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieDto } from './dto';
import { JwtGuard } from '../auth/guard';
import { ConfigService } from '@nestjs/config';

@UseGuards(JwtGuard)
@Controller('movie')
export class MovieController {
  constructor(
    private readonly movieService: MovieService,
    private config: ConfigService,
  ) {}

  @Post()
  create(@Body() createMovieDto: MovieDto) {
    return this.movieService.create(createMovieDto);
  }

  @Get()
  async findAll() {
    let movies;
    movies = await this.movieService.redisClient.get('movies');
    if (movies) {
      return JSON.parse(movies);
    }
    movies = await this.movieService.findAll();
    await this.movieService.redisClient.set('movies', JSON.stringify(movies));

    return movies;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movieService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieDto: MovieDto) {
    return this.movieService.update(+id, updateMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movieService.remove(+id);
  }
}
