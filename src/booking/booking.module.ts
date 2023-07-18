import { Module } from '@nestjs/common';
import { BookingService } from './services/booking.service';
import { BookingController } from './controllers/booking.controller';
import { BookingRepository } from './repository/booking.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingEntity } from './repository/booking.entity';
import config from 'shared/config/configuration';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookingEntity]),
    ConfigModule.forRoot({
      envFilePath: join('..', '..', 'configuration', 'env.config'),
      load: [config],
      isGlobal: true,
    }),
  ],
  controllers: [BookingController],
  providers: [BookingService, BookingRepository],
})
export class BookingModule {}
