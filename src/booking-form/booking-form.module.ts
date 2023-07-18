import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookingFormEntity } from './repository/booking-form.entity';
import { BookingFormController } from './controllers/booking-form.controller';
import { BookingFormService } from './services/guest.service';
import { BookingFormRepository } from './repository/booking-form.repository';
import config from 'shared/config/configuration';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookingFormEntity]),
    ConfigModule.forRoot({
      envFilePath: join('..', '..', 'configuration', 'env.config'),
      load: [config],
      isGlobal: true,
    }),
  ],
  controllers: [BookingFormController],
  providers: [BookingFormService, BookingFormRepository],
})
export class BookingFormModule {}
