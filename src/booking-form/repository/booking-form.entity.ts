import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { BookingFormInterface } from '../shared/interfaces/booking-form.interface';
import { BookingEntity } from 'booking/repository/booking.entity';
import { GuestEntity } from 'guest/repository/guest.entity';

@Entity({ name: 'booking_form' })
export class BookingFormEntity implements BookingFormInterface {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;
  @Column('text', {
    name: 'user_email',
  })
  userEmail: string;
  @Column('timestamp without time zone', {
    name: 'created_at',
  })
  createdAt: Date;
  @OneToOne(() => BookingEntity, (bookingEntity) => bookingEntity.id)
  @JoinColumn({ name: 'booking_id' })
  booking: BookingEntity;

  @OneToMany(() => GuestEntity, (guestEntity) => guestEntity.id)
  @JoinColumn({ name: 'guest_id' })
  guest: GuestEntity[];
}
