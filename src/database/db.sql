-- Create TABLE todos
CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updateAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create TRIGGER update_timestamp
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updateAt = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create TRIGGER update_todos_createAt
CREATE TRIGGER update_todos_updateAt
BEFORE UPDATE ON todos
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();

-- Create TABLE todos_deleted
CREATE TABLE todos_deleted (
  id INT PRIMARY KEY,
  title VARCHAR(255),
  description VARCHAR(255),
  createAt TIMESTAMP,
  updateAt TIMESTAMP,
  deletedAt TIMESTAMP
);

-- Create TRIGGER log_deleted_todo
CREATE OR REPLACE FUNCTION log_deleted_todo()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO todos_deleted VALUES (OLD.id, OLD.title, OLD.description, OLD.createAt, OLD.updateAt, NOW());
  RETURN OLD;
END;
$$ language 'plpgsql';

-- Create TRIGGER log_todos_creation
CREATE TRIGGER log_todos_deletion
AFTER DELETE ON todos
FOR EACH ROW
EXECUTE PROCEDURE log_deleted_todo();
