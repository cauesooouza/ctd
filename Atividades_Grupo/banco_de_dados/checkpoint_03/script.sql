DROP DATABASE IF EXISTS `petshop`;
CREATE DATABASE `petshop`;

USE `petshop`;

CREATE TABLE `enderecos`(
    `endereco_id` int not null auto_increment primary key,
    `logradouro` varchar(150),
    `numero` int,
    `cidade` varchar(100),
    `estado` varchar(100),
    `cep` varchar(10),
    `complemento` varchar(100)  
);

CREATE TABLE `clientes` (
    `cliente_id` int not null auto_increment primary key,
    `nome` varchar(150),
    `sobrenome` varchar(150),
    `endereco_id` int,
     constraint `fk_endereco_cliente`
        foreign key (`endereco_id`)
        references `enderecos`(`endereco_id`)
);

CREATE TABLE `animais`(
    `animal_id` int not null auto_increment primary key,
    `tipo` varchar(80),
    `nome` varchar(100),
    `porte` varchar(50),
    `raca` varchar(80),
    `cliente_id` int,
    constraint `fk_cliente_id`
        foreign key (`cliente_id`)
        references `clientes`(`cliente_id`)
);

CREATE TABLE `fornecedores`(
    `fornecedor_id` int not null auto_increment primary key,
    `nome` varchar(150),
    `cnpj` varchar(14),
    `representante` varchar(100),
    `telefone` varchar(9),
    `endereco_id` int,
    constraint `fK_endereco_fornecedor`
        foreign key (`endereco_id`)
        references `enderecos`(`endereco_id`)
);

CREATE TABLE `produtos`(
    `produto_id` int not null auto_increment primary key,
    `nome` varchar(100),
    `preco` decimal,
    `categoria` varchar(50),
    `fornecedor_id` int,
    constraint `fk_fornecedor`
        foreign key (`fornecedor_id`)
        references `fornecedores`(`fornecedor_id`)
);

CREATE TABLE `estoque`(
    `estoque_id` int not null auto_increment primary key,
    `produto_id` int,
    constraint `fk_produto`
        foreign key (`produto_id`)
        references `produtos`(`produto_id`),
    `quantidade` int
);

INSERT INTO enderecos (logradouro,numero,cidade,estado,cep,complemento) VALUES
('Rua das Andorinhas',125,'São Paulo','SP','05056003',''),
('Avenida 14 de julho',134,'São Paulo','SP','45689956',''),
('Praça Marquês de Galinhal',17,'Campinas','SP','08027567','Apto.23'),
('Rodovia Castelo Preto',4134,'São Paulo','SP','09154783','Em frente à Leroy Merlin'),
('Alameda Marechal Bispo Presidente Carlos XI',134,'São Paulo','SP','410056837','Ao lado do MC Donalds'),
('Avenida Dr. Estranho',598,'Campinas','SP','6580456',''),
('Rua 4 de junho',4,'Rio de Janeiro','RJ','4487256','Na esquina'),
('Avenida 123',1062,'São Paulo','SP','8467248883','apto. 123'),
('Avenida Parcial',79,'São Paulo','SP','108389100',''),
('Rua Imparcial',81,'Rio de Janeiro','RJ','7774307','Ao lado do bar do Zé');


insert into animais (animal_id, tipo, nome, porte, raca, cliente_id) VALUES 
( 1,'cachorro', 'Nina', 'pequeno', 'shitzu',1),
( 2,'gato', 'Snow', 'pequeno', 'persa',2),
( 3,'cachorro', 'Roger', 'pequeno', 'poodle',3),
( 4,'cachorro', 'Jaime', 'pequeno', 'SRD',4),
( 5,'cachorro', 'Zico', 'grande', 'SRD',5),
( 6,'gato', 'Joel', 'pequeno', 'siames',6),
( 7,'gato', 'Boris', 'pequeno', 'exotico',7),
( 8,'cachorro', 'Sofia', 'grande', 'Golden retriever',8),
( 9,'cachorro', 'Rex', 'grande', 'Husky siberiano',9),
( 10,'cachorro', 'Beethoven', 'medio', 'buldogue',10);

insert into produtos (produto_id,nome,preco,categoria,fornecedor_id) values
(1,'Ração Premier - 12kg', 234.90, 'Cachorros', 10),
(2,'Ração Royal Canin Max - 15kg', 391.59, 'Cachorros', 2),
(3,'Ração Royal Canin Premium - 1kg', 68.19, 'Gatos', 9),
(4,'Ração Nutribetta - 12g', 10.55, 'Peixe', 8),
(5,'Petisco Pedigree Dentastix', 23.39, 'Cachorros', 7),
(6,'Areia para gatos - 12kg', 37.99, 'Gatos', 6),
(7,'Antipulgas Simparic 20 mg - cães 5,1 a 10 kg', 95.50, 'Cachorros', 5),
(8,'Arranhador Cansei de Ser Gato', 279.99, 'Gatos', 4),
(9,'Gaiola Bragança Criadeira', 473.32, 'Passaros', 3),
(10,'Banho e tosa', 60.90, 'Serviços', 2),
(11,'Veterinária', 120.00, 'Serviços', 1);

insert into clientes ( nome, sobrenome, endereco_id) values 
('João', 'da Silva', '1'), 
('Pedro', 'Antunes', '2'), 
('Josimar', 'Ferreira', '3'), 
('Alexandre', 'Barbosa', '4'), 
('Fernando', 'Fonseca', '5'), 
('Mariana', 'Gomes', '6'), 
('Neide', 'Rocha', '7'), 
('Théo', 'Rosa', '8'), 
('Daniela', 'Dos Santos', '9'), 
('António', 'Azevedo', '10');

