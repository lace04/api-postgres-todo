import { config } from 'dotenv';

config();

export const PORT = process.env.PORT || 3000;
export const DBUSER = process.env.PGUSER || 'postgres';
export const DBHOST = process.env.PGHOST || 'localhost';
export const PGPASSWORD = process.env.PGPASSWORD || 'root';
export const DBNAME = process.env.PGDATABASE || 'todo';
export const DBPORT = process.env.PGPORT || 5432;
