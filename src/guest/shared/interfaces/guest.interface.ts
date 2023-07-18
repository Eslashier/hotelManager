import { documentTypeEnum } from '../enums/document-type.enum';
import { genderEnum } from '../enums/gender.enum';

export interface GuestInterface {
  id: string;
  name: string;
  lastName: string;
  birthDate: Date;
  gender: genderEnum;
  documentType: documentTypeEnum;
  documentId: string;
  email: string;
  phone: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
}
