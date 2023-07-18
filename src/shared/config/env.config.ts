import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

const filename = process.env.NODE_ENV === 'test' ? 'test.env' : '.env';
const tsPath = path.resolve(__dirname, `../../${filename}`);
const jsPath = path.resolve(__dirname, `../../../${filename}`);
dotenv.config({ path: fs.existsSync(tsPath) ? tsPath : jsPath });

const setupEnvConfig = () => process.env;

setupEnvConfig();
