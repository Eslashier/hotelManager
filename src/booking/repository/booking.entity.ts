import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BookingInterface } from '../shared/interfaces/booking.interface';

@Entity({ name: 'booking' })
export class BookingEntity implements BookingInterface {
  @PrimaryGeneratedColumn('uuid', { name: 'booking_id' })
  id: string;

  @Column('date', {
    name: 'booking_start_date',
  })
  startDate: Date;

  @Column('timestamp without time zone', {
    name: 'booking_end_date',
  })
  endDate: Date;

  @Column('timestamp without time zone', {
    name: 'booking_guest_qty',
  })
  guestQuantity: number;
}
