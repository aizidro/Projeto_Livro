DROP DATABASE IF EXISTS livros;
CREATE DATABASE livros CHARSET=UTF8 COLLATE utf8_general_ci;
USE livros;

CREATE TABLE livro (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(40) NOT NULL,
    autor VARCHAR(40) NOT NULL,
    valor float NOT NULL,
    dataEmprest date NOT NULL,
    dataPrevDev date NOT NULL,
    dataDevolucao date
);