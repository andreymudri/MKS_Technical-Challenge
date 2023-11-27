import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Movie, User } from './entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'backend_challenge',
  synchronize: true,
  logging: false,
  entities: [User, Movie],
  migrations: [],
  subscribers: [],
});
