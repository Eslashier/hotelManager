import { BookingEntity } from 'booking/repository/booking.entity';
import { roomTypeEnum } from '../enums/room-type.enum';
import { HotelEntity } from 'hotel/repository/hotel.entity';

export interface RoomInterface {
  id: string;
  price: number;
  tax: number;
  roomType: roomTypeEnum;
  roomNumber: number;
  enable: boolean;
  booking?: BookingEntity[];
  hotel?: HotelEntity;
}
