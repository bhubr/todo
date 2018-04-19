alter table tasks add column `userId` INTEGER NOT NULL;
create table if not exists users (
  `id` INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `email` VARCHAR(128) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `avatar` VARCHAR(255),
  `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP
);

alter table tasks add foreign key(userId) references users(id);
