import { BookingEntity } from 'booking/repository/booking.entity';
import { GuestEntity } from 'guest/repository/guest.entity';

export interface BookingFormInterface {
  id: string;
  userEmail: string; //created by user.email
  guest: GuestEntity[];
  booking: BookingEntity;
  createdAt: Date;
}
