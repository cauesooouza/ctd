CREATE DATABASE IF NOT EXISTS DHtube;
use DHtube;

CREATE TABLE pais(
    pais_id INT not null auto_increment primary key,
    nome varchar(100)
);

CREATE TABLE avatar(
    avatar_id INT not null auto_increment primary key,
    nome varchar(45),
    urlimagem varchar(100)
);

CREATE TABLE usuario(
    usuario_id INT not null auto_increment primary key,
    nome varchar(45),
    email varchar(45),
    senha varchar(45),
    dataNascimento DATETIME ,
    cep varchar(45),
    pais_id INT,
    CONSTRAINT fk_pais_pais_id
        foreign key (pais_id)
        references pais(pais_id),
	avatar_id INT,
    CONSTRAINT fk_avatar_avatar_id
        foreign key (avatar_id)
        references avatar(avatar_id)
);

CREATE TABLE canal(
    canal_id INT not null auto_increment primary key,
    nome varchar(45),
    descricao text,
    dataCriacao datetime,
    usuario_id int,
    CONSTRAINT fk_usuario_usuario_id
        foreign key (usuario_id)
        references usuario(usuario_id)
);

CREATE TABLE playlist(
    playlist_id INT not null auto_increment primary key,
    nome varchar(45),
    dataCriacao datetime,
    privado smallint,
    usuario_id int,
    CONSTRAINT fk_usuario_usuario_id2
        foreign key (usuario_id)
        references usuario(usuario_id)
);

CREATE TABLE video(
    video_id INT not null auto_increment primary key,
    usuario_id int,
    CONSTRAINT fk_usuario_usuario_id3
        foreign key (usuario_id)
        references usuario(usuario_id),
    title varchar(100),
    descricao text,
    tamanho double,
    nomeArquivo varchar(100),
    duracao double,
    imagem varchar(100),
    qtdReproducoes int,
    qtdLikes int,
    qtdDislikes int,
    privado smallint,
    dataPublicacao datetime
);

CREATE TABLE playlist_video(
	video_id int,
    CONSTRAINT fk_video_video_id
    foreign key (video_id)
    references video(video_id),
    playlist_id int,
    CONSTRAINT fk_playlist_playlist_id
    foreign key (playlist_id)
    references playlist(playlist_id)
);