import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRoomTable1689389506098 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'room',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            default: 'uuid_generate_v4()',
            isPrimary: true,
          },
          {
            name: 'price',
            type: 'numeric',
          },
          {
            name: 'tax',
            type: 'numeric',
          },
          {
            name: 'room_number',
            type: 'int',
          },
          {
            name: 'enable',
            type: 'boolean',
          },
          {
            name: 'booking',
            type: 'uuid',
          },
          {
            name: 'hotel',
            type: 'uuid',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('room');
  }
}
