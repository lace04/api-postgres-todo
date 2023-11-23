import express from 'express';
import morgan from 'morgan';
import { pool } from './db.js';
import { PORT } from './config.js';
import todoRoutes from './routes/todo.routes.js';

// Importing routes
const app = express();

// db connection
pool.on('connect', () => console.log('DB connected'));

// Middlewares
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.use(express.json());
app.use(todoRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
