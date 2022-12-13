DROP DATABASE IF EXISTS `todo_list`;
CREATE DATABASE IF NOT EXISTS `todo_list`;

USE `todo_list`;

CREATE TABLE `user`( 
    `user_id` int not null auto_increment primary key,
    `name` varchar(64),
    `email` varchar(320),
    `password` varchar(128)
);

CREATE TABLE `todo`(
    `todo_id` int not null auto_increment primary key,
    `name` varchar(45),
    `description` text,
     `user_id`int,
     constraint `fk_user_id`
        foreign key (`user_id`)
        references `user`(`user_id`)
);

CREATE TABLE `task_history`(
    `task_history_id` int not null auto_increment primary key,
    `state` VARCHAR(50)
);
CREATE TABLE `tasks`(
    `task_id` int not null auto_increment primary key,
    `name` varchar(45),
    `description` text,
    `date` datetime,
    `order` int unique key,
    `state` varchar(12),
    `todo_id` int,
    constraint `fk_todo_todo_id`
        foreign key (`todo_id`)
        references `todo`(`todo_id`),
        `task_history_id` int,
    constraint `fk_task_history_id`
        foreign key (`task_history_id`)
        references `task_history`(`task_history_id`)
);


INSERT INTO `user`(`name`, `email`, `password`)
VALUES('test', 'admin@admin.com', 'admin'),('caue', 'caue@gmail.com', '123test'),('maria', 'maria@gmail.com', '123maria'),('joao', 'joao@gmail.com', '123joao');

INSERT INTO `todo`(`name`,`description`,`user_id`)
VALUES('test','testando',1),('ser agil', 'manejo de tempo e afins',1),('exercicios', 'leetcode, daily tests',1),('marmitas', 'receitas, e planejamento',1);

UPDATE `todo` SET `name` = 'estudos'
WHERE `name` = 'test';

DELETE FROM `user` WHERE user_id = 2;

SELECT * from  `user` WHERE `name` LIKE 'test';

SELECT  count(t.user_id) as "Quantidade de To-do do Usuário", u.name as "Usuário" 
FROM todo t INNER JOIN user u 
ON t.user_id = u.user_id 
GROUP BY u.name 
ORDER BY count(t.user_id) DESC;