import 'dotenv/config';
import pkg from 'pg';

const { Pool } = pkg;
export const pool = new Pool({
  allowExitOnIdle: true,
});

export async function connectDB() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Connected to DB', res.rows[0].now);
  } catch (error) {
    console.log('Error connecting to DB', error);
  }
}
