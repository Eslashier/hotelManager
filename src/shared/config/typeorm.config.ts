import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import '../config/env.config';

export type ConnectionOptions = PostgresConnectionOptions &
  TypeOrmModuleOptions & { seeds: string[] };

export const hotelManagerConfig = (): ConnectionOptions => ({
  type: 'postgres',
  name: 'hotelManager',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [__dirname + `/../../**/*.entity.[tj]s`],
  migrations: [__dirname + `/../../db/migration/**/*.[tj]s`],
  seeds: [__dirname + '/../db/seeds/**/*.[tj]s'],
  ssl: false,
  extra: {},
  keepConnectionAlive: true,
});

export const config = hotelManagerConfig();
export const dataSource = new DataSource(hotelManagerConfig());
