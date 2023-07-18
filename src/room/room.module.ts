import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { RoomService } from './services/room.service';
import { RoomController } from './controllers/room.controller';
import { RoomEntity } from './repository/room.entity';
import { RoomRepository } from './repository/room.repository';
import { join } from 'path';

import config from 'shared/config/configuration';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoomEntity]),
    ConfigModule.forRoot({
      envFilePath: join('..', '..', 'configuration', 'env.config'),
      load: [config],
      isGlobal: true,
    }),
  ],
  controllers: [RoomController],
  providers: [RoomService, RoomRepository],
})
export class RoomModule {}
