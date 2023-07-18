import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { HotelInterface } from '../shared/interfaces/hotel.interface';
import { RoomEntity } from 'room/repository/room.entity';

@Entity({ name: 'hotel' })
export class HotelEntity implements HotelInterface {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('text', {
    unique: true,
    name: 'name',
  })
  hotelName: string;

  @Column('float', {
    default: 0,
    name: 'avg_price',
  })
  averagePrice: number;

  @Column('boolean', {
    unique: true,
    name: 'enable',
  })
  enable: boolean;

  @Column('text', {
    unique: true,
    name: 'city',
  })
  city: string;

  @OneToMany(() => RoomEntity, (roomEntity) => roomEntity.id, {
    cascade: true,
  })
  rooms: RoomEntity[];
}
