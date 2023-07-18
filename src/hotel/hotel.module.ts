import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { HotelController } from './controllers/hotel.controller';
import { HotelService } from './services/hotel.service';
import { HotelRepository } from './repository/hotel.repository';
import { HotelEntity } from './repository/hotel.entity';
import { join } from 'path';
import config from 'shared/config/configuration';

@Module({
  imports: [
    TypeOrmModule.forFeature([HotelEntity]),
    ConfigModule.forRoot({
      envFilePath: join('..', '..', 'configuration', 'env.config'),
      load: [config],
      isGlobal: true,
    }),
  ],
  controllers: [HotelController],
  providers: [HotelService, HotelRepository],
})
export class HotelModule {}
