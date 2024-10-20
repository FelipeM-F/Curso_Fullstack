-- Quais os números das matrículas dos alunos que não estão matriculados em uma turma?
SELECT matricula_id 
FROM MATRÍCULA 
WHERE turma_id IS NULL;