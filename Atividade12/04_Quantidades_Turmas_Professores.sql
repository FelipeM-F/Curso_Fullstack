-- Listar os professores e a quantidade de turmas que cada um leciona:
SELECT 
    P.nome, COUNT(T.turma_id) AS quantidade_turmas 
FROM PROFESSOR P
JOIN TURMA T ON P.professor_id = T.professor_id
GROUP BY P.nome;
