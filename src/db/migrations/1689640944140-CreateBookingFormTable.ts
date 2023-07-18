import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBookingFormTable1689640944140 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'booking_form',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            default: 'uuid_generate_v4()',
            isPrimary: true,
          },
          {
            name: 'user_email',
            type: 'text',
          },
          {
            name: 'created_at',
            type: 'timestamp',
          },
          {
            name: 'booking_id',
            type: 'uuid',
          },
          {
            name: 'booking_id',
            type: 'uuid',
            isArray: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('booking_form');
  }
}
