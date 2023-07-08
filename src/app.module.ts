import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelModule } from './hotel/hotel.module';
import { BookingModule } from './booking/booking.module';
import { TypeOrmConfigService } from './db/config/postgresql.config';
import { getEnvPath } from './shared/helper/env.helper';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

const envFilePath = getEnvPath(join(process.cwd(), 'envs'));

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    HotelModule,
    BookingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
