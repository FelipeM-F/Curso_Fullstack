-- Excluir as ausências dos alunos nas turmas que são monitores:
UPDATE MATRICULA M
SET ausencias = 0
WHERE M.aluno_id IN (
    SELECT aluno_monitor FROM TURMA WHERE aluno_monitor IS NOT NULL
);


