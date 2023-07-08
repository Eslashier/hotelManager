import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { HotelInterface } from '../shared/interfaces/hotel.interface';

@Entity({ name: 'hotel' })
export class HotelEntity implements HotelInterface {
  @PrimaryGeneratedColumn('uuid', { name: 'hotel_id' })
  id: string;

  @Column('text', {
    unique: true,
    name: 'hotel_name',
  })
  hotelName: string;

  @Column('float', {
    default: 0,
    name: 'hotel_avg_price',
  })
  averagePrice: number;

  @Column('boolean', {
    unique: true,
    name: 'hotel_enable',
  })
  enable: boolean;

  @Column('text', {
    unique: true,
    name: 'hotel_city',
  })
  city: string;
}
