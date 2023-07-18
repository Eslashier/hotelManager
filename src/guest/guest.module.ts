import { Module } from '@nestjs/common';
import { GuestService } from './services/guest.service';
import { GuestController } from './controllers/guest.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GuestRepository } from './repository/guest.repository';
import { GuestEntity } from './repository/guest.entity';

import config from 'shared/config/configuration';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forFeature([GuestEntity]),
    ConfigModule.forRoot({
      envFilePath: join('..', '..', 'configuration', 'env.config'),
      load: [config],
      isGlobal: true,
    }),
  ],
  controllers: [GuestController],
  providers: [GuestService, GuestRepository],
})
export class GuestModule {}
