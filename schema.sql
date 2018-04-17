create table tasks (
  `id` INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255),
  `state` ENUM('todo', 'doing', 'done')
)
