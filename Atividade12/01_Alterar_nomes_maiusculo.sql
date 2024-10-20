-- Alterar o nome de todos os professores para maiúsculo:
SET SQL_SAFE_UPDATES = 0; -- Desabilitando a segurança
UPDATE PROFESSOR 
SET nome = UPPER(nome);
SET SQL_SAFE_UPDATES = 1; -- Habilitando a segurança
