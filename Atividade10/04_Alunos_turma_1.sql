-- Quais os números dos alunos matriculados em uma turma de número '1'?
SELECT ALUNO.aluno_id 
FROM ALUNO
JOIN MATRÍCULA ON ALUNO.aluno_id = MATRÍCULA.aluno_id
WHERE MATRÍCULA.turma_id = 1;