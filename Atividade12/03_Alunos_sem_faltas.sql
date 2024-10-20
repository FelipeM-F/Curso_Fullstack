-- Listar os alunos que não possuem faltas:
SELECT 
    A.aluno_id, A.nome 
FROM ALUNO A
JOIN MATRICULA M ON A.aluno_id = M.aluno_id
WHERE M.ausencias = 0;