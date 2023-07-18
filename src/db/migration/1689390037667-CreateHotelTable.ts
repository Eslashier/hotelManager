import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateHotelTable1689390037667 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'hotel',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            default: 'uuid_generate_v4()',
            isPrimary: true,
          },
          {
            name: 'avg_price',
            type: 'numeric',
          },
          {
            name: 'enable',
            type: 'boolean',
          },
          {
            name: 'city',
            type: 'text',
          },
          {
            name: 'rooms',
            type: 'uuid',
            isArray: true,
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('hotel');
  }
}
