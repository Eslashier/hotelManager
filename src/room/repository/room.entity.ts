import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RoomInterface } from '../shared/interfaces/room.interface';
import { BookingEntity } from 'booking/repository/booking.entity';
import { roomTypeEnum } from '../shared/enums/room-type.enum';
import { HotelEntity } from 'hotel/repository/hotel.entity';

@Entity({ name: 'room' })
export class RoomEntity implements RoomInterface {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('float', {
    name: 'price',
  })
  price: number;

  @Column('float', {
    name: 'tax',
  })
  tax: number;
  roomType: roomTypeEnum;

  @Column('int', {
    name: 'room_number',
  })
  roomNumber: number;
  @Column('boolean', {
    unique: true,
    name: 'enable',
  })
  enable: boolean;

  @OneToMany(() => BookingEntity, (bookingEntity) => bookingEntity.room, {
    cascade: true,
  })
  @JoinColumn({ name: 'booking' })
  booking?: BookingEntity[];

  @ManyToOne(() => HotelEntity, (hotelEntity) => hotelEntity.rooms)
  @JoinColumn({ name: 'hotel' })
  hotel?: HotelEntity;
}
