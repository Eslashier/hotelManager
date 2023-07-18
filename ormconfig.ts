import { config } from 'src/shared/config/typeorm.config';
import { DataSource } from 'typeorm';

console.log(config);

export default new DataSource(config);
