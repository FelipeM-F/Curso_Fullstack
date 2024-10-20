CREATE DATABASE Atividade10;
USE Atividade10;

CREATE TABLE ALUNO (
    aluno_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    curso VARCHAR(50),
    nivel VARCHAR(20),
    idade INT
);

CREATE TABLE TURMA (
    turma_id INT AUTO_INCREMENT PRIMARY KEY,
    nometurma VARCHAR(50),
    sala VARCHAR(10),
    horario VARCHAR(20)
);

CREATE TABLE MATRÍCULA (
    matricula_id INT AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT,
    turma_id INT,
    nota_1 DECIMAL(5,2),
    nota_2 DECIMAL(5,2),
    nota_3 DECIMAL(5,2),
    nota_final DECIMAL(5,2),
    nr_faltas INT,
    FOREIGN KEY (aluno_id) REFERENCES ALUNO(aluno_id),
    FOREIGN KEY (turma_id) REFERENCES TURMA(turma_id)
);
