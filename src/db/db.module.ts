import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'hotel_manager',
      entities: [],
      migrations: [],
      synchronize: false,
    }),
  ],
  controllers: [],
  providers: [],
})
export class DbModule {}
