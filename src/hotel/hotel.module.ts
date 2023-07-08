import { Module } from '@nestjs/common';
import { HotelController } from './controllers/hotel.controller';
import { HotelService } from './services/hotel.service';
import { HotelRepository } from './repository/hotel.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelEntity } from './repository/hotel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HotelEntity])],
  controllers: [HotelController],
  providers: [HotelService, HotelRepository],
})
export class HotelModule {}
