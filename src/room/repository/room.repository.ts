import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { RoomEntity } from './room.entity';

@Injectable()
export class RoomRepository {
  private readonly logger = new Logger('ProductsService');

  constructor(
    @InjectRepository(RoomEntity)
    private readonly productRepository: Repository<RoomEntity>,
    private readonly dataSource: DataSource,
  ) {}

  private handleDBExceptions(error: any) {
    if (error.code == '23505') {
      throw new BadRequestException(error.detail);
    }
    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
