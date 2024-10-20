# Estudo de Caso - Escola de Informática

Este projeto é um sistema de gerenciamento para uma escola de informática, desenvolvido em SQL. O objetivo é manter um controle eficiente do funcionamento da escola, armazenando e gerenciando informações sobre alunos, turmas, professores e matrículas. O sistema permite o registro de dados, consultas e atualizações no banco de dados.

## Estrutura do Banco de Dados

O banco de dados é composto pelas seguintes tabelas:

- **ALUNO**: Armazena informações sobre os alunos, incluindo dados pessoais e de matrícula.
- **TURMA**: Armazena informações sobre as turmas, como quantidade de alunos, horários, duração e tipo de curso.
- **PROFESSOR**: Armazena informações sobre os professores, incluindo CPF, nome, data de nascimento, titulação e telefones.
- **MATRICULA**: Armazena informações sobre as matrículas dos alunos nas turmas, incluindo ausências.

## Requisitos

Para rodar este projeto, você precisará do seguinte:

- MySQL Server instalado
- Um cliente MySQL (como MySQL Workbench ou DBeaver)
- Acesso ao terminal (opcional, mas útil para alguns comandos)

## Como Rodar o Projeto

1. **Criar o Banco de Dados e Tabelas**:  
   Execute os comandos dos arquivos SQL fornecidos na ordem correta para criar o banco de dados e as tabelas. Você encontrará os arquivos listados abaixo:

   - [**Db_escola_informatica.sql**](Db_escola_informatica.sql): Este arquivo contém os comandos para criar o banco de dados e as tabelas necessárias.
   - [**Data.sql**](Data.sql): Este arquivo contém os comandos para inserir dados iniciais nas tabelas.
   - [**01_Dados_alunos.sql**](01_Dados_alunos.sql): Este arquivo contém os comandos para listar os dados dos alunos.
   - [**02_Turmas_alunos.sql**](02_Turmas_alunos.sql): Este arquivo contém os comandos para listar os dados dos alunos e as turmas em que estão matriculados.
   - [**03_Alunos_sem_faltas.sql**](03_Alunos_sem_faltas.sql): Este arquivo contém os comandos para listar alunos que não possuem faltas.
   - [**04_Quantidades_Turmas_Professores.sql**](04_Quantidades_Turmas_Professores.sql): Este arquivo contém os comandos para listar os professores e a quantidade de turmas que cada um leciona.
   - [**05_Dados_professores_turmas.sql**](05_Dados_professores_turmas.sql): Este arquivo contém os comandos para listar os dados dos professores e suas turmas.
### Arquivos de Alteração

Os seguintes arquivos SQL contêm as instruções para as alterações mencionadas:

- [**01_Alterar_nomes_maiusculo.sql**](01_Alterar_nomes_maiusculo.sql): Altera o nome de todos os professores para maiúsculo.
- [**01_Alterar_alunos_maiusculo.sql**](01_Alterar_alunos_maiusculo.sql): Altera o nome de todos os alunos na turma com o maior número de alunos para maiúsculo.
- [**03_Excluir_faltas.sql**](03_Excluir_faltas.sql): Exclui as ausências dos alunos nas turmas em que eles são monitores.

  Para executar os comandos, siga estas etapas:

   a. Abra seu cliente MySQL (como MySQL Workbench ou DBeaver).

   b. Carregue o arquivo `Db_escola_informatica.sql` e execute os comandos para criar o banco de dados e as tabelas.

   c. Em seguida, carregue o arquivo `Data.sql` e execute os comandos para inserir dados nas tabelas.

   d. Execute os arquivos na ordem adequada conforme listado acima.

## Instruções da Atividade

Estudo de Caso - Escola de Informática

Uma escola de informática deseja manter um controle do seu funcionamento. Os alunos são organizados em turmas associadas a um tipo específico de curso. As informações sobre uma turma são a quantidade de alunos, horário da aula, duração da aula, data inicial, data final e tipo de curso. Cada turma é orientada por um único professor para o qual são cadastrados CPF, nome, data de nascimento, titulação e todos os telefones possíveis para sua localização. Um professor pode orientar várias turmas que podem ser de diferentes cursos. Para cada turma existe um aluno monitor que auxilia o professor da turma, sendo que um aluno pode ser monitor no máximo em uma turma. Os dados cadastrados dos alunos são: código de matricula, data de matrícula, nome, endereço, telefone, data de nascimento, altura e peso. Um aluno pode estar matriculado em várias turmas se deseja realizar cursos diferentes e para cada matrícula é mantido um registro das ausências do aluno.

Fazer consultas SQL que respondam as seguintes questões:

1) Listar os dados dos alunos;
2) Listar os dados dos alunos e as turmas que eles estão matriculados;
3) Listar os alunos que não possuem faltas;
4) Listar os professores e a quantidade de turmas que cada um leciona;
5) Listar nome dos professores, apenas um dos números de telefone do professor, dados (id da turma, data início, data fim e horário) das turmas que o professor leciona, curso da turma e alunos matriculados ordenado por nome do professor, id turma e nome do aluno;

Fazer alterações nas tabelas:


1) Alterar o nome de todos os professores para maiúsculo;2) Colocar o nome de todos os alunos que estão na turma com o maior número de alunos em maiúsculo;
3) Excluir as ausências dos alunos nas turmas que estes são monitores;
