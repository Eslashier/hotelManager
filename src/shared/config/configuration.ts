import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    typeOrm: {
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: +process.env.TYPEORM_PORT,
      database: process.env.DB_POSTGRESQL_NAME,
      username: process.env.TYPEORM_BACKOFFICE_USERNAME,
      password: process.env.TYPEORM_USER_PASSWORD,
    },
  };
});
