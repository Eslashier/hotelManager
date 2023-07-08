import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { HotelEntity } from './hotel.entity';

@Injectable()
export class HotelRepository {
  private readonly logger = new Logger('ProductsService');

  constructor(
    @InjectRepository(HotelEntity)
    private readonly productRepository: Repository<HotelEntity>,
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
