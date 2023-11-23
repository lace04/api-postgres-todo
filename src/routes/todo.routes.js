import { Router } from 'express';
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateTodo,
} from '../controllers/todo.controller.js';

const router = Router();

router.get('/todos', getTodos);
router.get('/todos/:id', getTodoById);
router.post('/todos', createTodo);
router.patch('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

export default router;
