import { IsNotEmpty, IsString } from 'class-validator';

export class MovieDto {
  @IsNotEmpty()
  @IsString()
  movie: string;
  @IsNotEmpty()
  @IsString()
  description: string;
}
