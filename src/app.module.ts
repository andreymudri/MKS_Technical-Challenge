import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { MovieModule } from './movie/movie.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    MovieModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // the type of your database
      host: 'localhost', // the host of your database
      port: 5432, // the port of your database
      username: 'postgres', // the username for your database
      password: 'postgres', // the password for your database
      database: 'backend_challenge', // the name of your database
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // the path to your entities
      synchronize: true, // set to true if you want TypeORM to automatically create the database schema on every application launch
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
