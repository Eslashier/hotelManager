import { RoomEntity } from 'room/repository/room.entity';

export interface HotelInterface {
  id: string;
  hotelName: string;
  averagePrice: number;
  enable: boolean;
  city: string;
  rooms: RoomEntity[];
}
