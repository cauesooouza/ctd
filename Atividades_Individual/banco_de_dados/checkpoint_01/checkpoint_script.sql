CREATE DATABASE IF NOT EXISTS `todo_list`;

USE `todo_list`;

CREATE TABLE `tasks`(
	`task_id` int not null auto_increment primary key,
    `name` varchar(45),
    `description` text,
    `date` datetime,
    `order` int unique key,
    `state` varchar(12)
);

CREATE TABLE `task_history`(
	`task_history_id` int not null auto_increment primary key,
    `done` int,
    `archived` int,
    `current` int
);

CREATE TABLE `todo`(
	`todo_id` int not null auto_increment primary key,
    `name` varchar(45),
    `description` text,
    `task_id` int,
    constraint `fk_tasks_task_id`
		foreign key (`task_id`)
        references tasks(`task_id`),
	`task_history_id` int,
	constraint `fk_task_history_id`
		foreign key (`task_history_id`)
        references `task_history`(`task_history_id`)
);

CREATE TABLE `user`( 
	`user_id` int not null auto_increment primary key,
	`name` varchar(64),
    `email` varchar(320),
    `password` varchar(128),
    `todo_id` int,
    constraint `fk_todo_id`
		foreign key (`todo_id`)
        references `todo`(`todo_id`)
);