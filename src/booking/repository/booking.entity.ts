import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BookingInterface } from '../shared/interfaces/booking.interface';
import { RoomEntity } from 'room/repository/room.entity';
import { BookingFormEntity } from 'bookingForm/repository/booking-form.entity';

@Entity({ name: 'booking' })
export class BookingEntity implements BookingInterface {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('date', {
    name: 'start_date',
  })
  startDate: Date;

  @Column('timestamp without time zone', {
    name: 'end_date',
  })
  endDate: Date;

  @Column('int', {
    name: 'guest_qty',
  })
  guestQuantity: number;

  // @ManyToOne(() => RoomEntity, (roomEntity) => roomEntity.booking)
  // @JoinColumn({ name: 'room_id' })
  // room: RoomEntity;

  // @OneToOne(
  //   () => BookingFormEntity,
  //   (bookingFormEntity) => bookingFormEntity.booking,
  // )
  // @JoinColumn({ name: 'form_id' })
  // bookingForm: BookingFormEntity;
}
