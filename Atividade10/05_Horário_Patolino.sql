-- Qual o horário da turma do aluno 'PATOLINO'?
SELECT T.horario 
FROM ALUNO A
JOIN MATRÍCULA M ON A.aluno_id = M.aluno_id
JOIN TURMA T ON M.turma_id = T.turma_id
WHERE A.nome = 'PATOLINO';