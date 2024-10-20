-- Listar os dados dos alunos e as turmas que eles estão matriculados:
SELECT 
    A.aluno_id, A.nome, T.turma_id, T.curso 
FROM ALUNO A
JOIN MATRICULA M ON A.aluno_id = M.aluno_id
JOIN TURMA T ON M.turma_id = T.turma_id;
