CREATE DATABASE EscolaInformatica;
USE EscolaInformatica;

CREATE TABLE PROFESSOR (
    professor_id INT PRIMARY KEY,
    cpf VARCHAR(11) NOT NULL,
    nome VARCHAR(100),
    data_nascimento DATE,
    titulacao VARCHAR(50)
);

CREATE TABLE TELEFONE_PROFESSOR (
    professor_id INT,
    telefone VARCHAR(15),
    PRIMARY KEY (professor_id, telefone),
    FOREIGN KEY (professor_id) REFERENCES PROFESSOR(professor_id)
);

CREATE TABLE ALUNO (
    aluno_id INT PRIMARY KEY,
    data_matricula DATE,
    nome VARCHAR(100),
    endereco VARCHAR(200),
    telefone VARCHAR(15),
    data_nascimento DATE,
    altura FLOAT,
    peso FLOAT
);

CREATE TABLE TURMA (
    turma_id INT PRIMARY KEY,
    curso VARCHAR(100),
    quantidade_alunos INT,
    horario VARCHAR(20),
    duracao INT,
    data_inicio DATE,
    data_fim DATE,
    professor_id INT,
    aluno_monitor INT,
    FOREIGN KEY (professor_id) REFERENCES PROFESSOR(professor_id),
    FOREIGN KEY (aluno_monitor) REFERENCES ALUNO(aluno_id)
);

CREATE TABLE MATRICULA (
    matricula_id INT PRIMARY KEY,
    aluno_id INT,
    turma_id INT,
    ausencias INT,
    FOREIGN KEY (aluno_id) REFERENCES ALUNO(aluno_id),
    FOREIGN KEY (turma_id) REFERENCES TURMA(turma_id)
);