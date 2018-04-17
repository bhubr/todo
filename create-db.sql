create database todo_app character set utf8 collate utf8_unicode_ci;
create user `todoapp`@`localhost` identified by 'ToDo123@';
grant all privileges on todo_app.* to `todoapp`@`localhost`;
