-- Colocar o nome de todos os alunos na turma com mais alunos em maiúsculo:
SET SQL_SAFE_UPDATES = 0;
UPDATE ALUNO 
SET nome = UPPER(nome)
WHERE aluno_id IN (
    SELECT M.aluno_id
    FROM MATRICULA M
    JOIN TURMA T ON M.turma_id = T.turma_id
    WHERE T.turma_id IN (
        SELECT T.turma_id
        FROM TURMA T
        JOIN MATRICULA M ON T.turma_id = M.turma_id
        GROUP BY T.turma_id
        HAVING COUNT(M.aluno_id) = (
            SELECT MAX(total_alunos)
            FROM (
                SELECT COUNT(M.aluno_id) AS total_alunos
                FROM MATRICULA M
                JOIN TURMA T ON M.turma_id = T.turma_id
                GROUP BY T.turma_id
            ) AS subquery
        )
    )
);
SET SQL_SAFE_UPDATES = 1;
