-- Listar dados dos professores, turmas e alunos matriculados:
SELECT 
    P.nome AS professor, 
    MIN(TP.telefone) AS telefone,
    T.turma_id, T.data_inicio, T.data_fim, T.horario, T.curso,
    A.aluno_id, A.nome AS aluno
FROM PROFESSOR P
JOIN TELEFONE_PROFESSOR TP ON P.professor_id = TP.professor_id
JOIN TURMA T ON P.professor_id = T.professor_id
JOIN MATRICULA M ON T.turma_id = M.turma_id
JOIN ALUNO A ON M.aluno_id = A.aluno_id
GROUP BY 
    P.professor_id, P.nome, T.turma_id, T.data_inicio, 
    T.data_fim, T.horario, T.curso, A.aluno_id, A.nome
ORDER BY P.nome, T.turma_id, A.nome;

