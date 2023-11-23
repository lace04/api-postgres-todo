import express from 'express';
import morgan from 'morgan';
import todoRoutes from './routes/todo.routes.js';

// Importing routes
const app = express();

app.use(express.json());
app.use('/api', todoRoutes);

// Middlewares
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ message: 'API todos with POSTGRESQL' });
});

export default app;
