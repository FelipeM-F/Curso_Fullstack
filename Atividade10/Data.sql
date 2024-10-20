-- Inserindo dados na tabela ALUNO
INSERT INTO ALUNO (nome, curso, nivel, idade) VALUES
('Patolino', 'Administração', 'Graduação', 22),
('Pernalonga', 'Engenharia', 'Graduação', 24),
('Taz', 'Economia', 'Graduação', 21),
('Lola Bunny', 'Arquitetura', 'Graduação', 23),
('Frajola', 'Matemática', 'Graduação', 20);

-- Inserindo dados na tabela TURMA
INSERT INTO TURMA (nometurma, sala, horario) VALUES
('Turma A', 'Sala 101', '08:00 - 10:00'),
('Turma B', 'Sala 102', '10:00 - 12:00'),
('Turma C', 'Sala 103', '13:00 - 15:00'),
('Turma D', 'Sala 104', '15:00 - 17:00'),
('Turma E', 'Sala 105', '17:00 - 19:00');

-- Inserindo dados na tabela MATRÍCULA
INSERT INTO MATRÍCULA (aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas) VALUES
(1, 1, 7.5, 8.0, 9.0, 8.2, 2),
(2, 2, 6.0, 7.5, 8.0, 7.2, 3),
(3, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 3, 8.5, 9.0, 8.5, 8.7, 1),
(5, 1, 5.0, 6.0, 6.5, 5.8, 5);
