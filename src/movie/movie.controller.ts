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
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Movie')
@UseGuards(JwtGuard)
@Controller('movie')
export class MovieController {
  constructor(
    private readonly movieService: MovieService,
    private config: ConfigService,
  ) {}

  @ApiOperation({ summary: 'Create movie' })
  @ApiBody({ type: MovieDto })
  @ApiResponse({
    status: 201,
    description: 'The movie has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  create(@Body() createMovieDto: MovieDto) {
    return this.movieService.create(createMovieDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all movies' })
  @ApiResponse({
    status: 200,
    description: 'The movies have been successfully retrieved.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
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
  @ApiOperation({ summary: 'Get movie by id' })
  @ApiResponse({
    status: 200,
    description: 'The movie has been successfully retrieved.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findOne(@Param('id') id: string) {
    return this.movieService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update movie by id' })
  @ApiResponse({
    status: 200,
    description: 'The movie has been successfully updated.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  update(@Param('id') id: string, @Body() updateMovieDto: MovieDto) {
    return this.movieService.update(+id, updateMovieDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete movie by id' })
  @ApiResponse({
    status: 200,
    description: 'The movie has been successfully deleted.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  remove(@Param('id') id: string) {
    return this.movieService.remove(+id);
  }
}
