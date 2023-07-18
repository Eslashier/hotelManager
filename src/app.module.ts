import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './db/config/postgresql.config';
import { getEnvPath } from './shared/helper/env.helper';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { BookingModule } from 'booking/booking.module';
import { GuestModule } from 'guest/guest.module';
import { HotelModule } from 'hotel/hotel.module';
import { RoomModule } from 'room/room.module';

const envFilePath = getEnvPath(join(process.cwd(), 'envs'));

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    HotelModule,
    BookingModule,
    RoomModule,
    GuestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
