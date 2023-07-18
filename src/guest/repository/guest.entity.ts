import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GuestInterface } from '../shared/interfaces/guest.interface';
import { genderEnum } from 'guest/shared/enums/gender.enum';
import { documentTypeEnum } from 'guest/shared/enums/document-type.enum';
import { BookingFormEntity } from 'bookingForm/repository/booking-form.entity';

@Entity({ name: 'guest' })
export class GuestEntity implements GuestInterface {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;
  @Column('text', {
    name: 'name',
  })
  name: string;
  @Column('text', {
    name: 'last_name',
  })
  lastName: string;
  @Column('timestamp without time zone', {
    name: 'birth_date',
  })
  birthDate: Date;
  @Column('text', {
    name: 'gender',
  })
  gender: genderEnum;
  @Column('text', {
    name: 'gender',
  })
  documentType: documentTypeEnum;
  @Column('text', {
    name: 'document_id',
  })
  documentId: string;
  @Column('text', {
    name: 'email',
  })
  email: string;
  @Column('text', {
    name: 'phone',
  })
  phone: string;
  @Column('text', {
    name: 'emergency_contact_name',
  })
  emergencyContactName: string;
  @Column('text', {
    name: 'emergency_contact_phone',
  })
  emergencyContactPhone: string;
}
