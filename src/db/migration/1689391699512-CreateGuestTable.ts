import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateHotelTable1689391699512 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'guest',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            default: 'uuid_generate_v4()',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'text',
          },
          {
            name: 'last_name',
            type: 'text',
          },
          {
            name: 'birth_date',
            type: 'timestamp',
          },
          {
            name: 'gender',
            type: 'text',
          },
          {
            name: 'document_id',
            type: 'text',
          },
          {
            name: 'email',
            type: 'text',
          },
          {
            name: 'phone',
            type: 'text',
          },
          {
            name: 'emergency_contact_name',
            type: 'text',
          },
          {
            name: 'emergency_contact_phone',
            type: 'text',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('guest');
  }
}
