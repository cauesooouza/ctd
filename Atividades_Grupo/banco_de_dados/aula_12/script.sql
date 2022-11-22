/*1*/
USE projeto_spotify;
/*2*/
SELECT * FROM cancao where titulo like '%z%';
/*3*/
SELECT * FROM cancao where titulo like '_a%s';
/*4*/
SELECT idPlaylist AS 'Id Playlist', titulo AS 'Título', qtdcancoes AS 'Quantidade de canções' FROM playlist ORDER BY qtdcancoes DESC LIMIT 1;
/*5*/
SELECT * FROM usuario order by Data_nac desc limit 5 offset 10;
/*6*/
SELECT * FROM cancao order by qtdreproducao desc limit 5; 
/*7*/
SELECT * FROM album order by titulo asc;
/*8*/
SELECT * FROM album where imagemcapa is null order by titulo asc;
/*9*/
INSERT INTO usuario (idUsuario,NomeUsuario,NomeCompleto,Data_nac,sexo,senha,Pais_idPais) values (20,'novousuariodespotify@gmail.com','Elmer Santos','1991-11-15','M','S4321m',9);
/*10*/
DELETE FROM generoxcancao where IdGenero = 9;
/*11*/
UPDATE artista set imagem = 'imagem em falta' where imagem is null;