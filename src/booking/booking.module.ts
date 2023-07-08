import { Module } from '@nestjs/common';
import { BookingService } from './services/booking.service';
import { BookingController } from './controllers/booking.controller';
import { BookingRepository } from './repository/booking.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingEntity } from './repository/booking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookingEntity])],
  controllers: [BookingController],
  providers: [BookingService, BookingRepository],
})
export class BookingModule {}
