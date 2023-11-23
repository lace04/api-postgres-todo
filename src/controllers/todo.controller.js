import { pool } from '../db.js';

export const getTodos = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM todos ORDER BY id DESC');
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'No todos found' });
    }
    res.json(result.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM todos WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const result = await pool.query(
      'INSERT INTO todos (title, description) VALUES ($1, $2) RETURNING *',
      [title, description]
    );
    res.json({
      id: result.rows[0].id,
      title: result.rows[0].title,
      description: result.rows[0].description,
      message: 'Todo created successfully',
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const result = await pool.query(
      'UPDATE todos SET title = $1, description = $2 WHERE id = $3 RETURNING *',
      [title, description, id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json({ message: 'Todo updated successfully', result: result.rows[0] });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM todos WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    return res.status(204).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
