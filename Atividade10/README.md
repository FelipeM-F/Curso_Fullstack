# Projeto Escola

Este projeto é um sistema de gerenciamento escolar desenvolvido em SQL, projetado para armazenar e gerenciar informações sobre professores, alunos, turmas e matrículas. Ele permite o registro de dados, consultas e atualizações de informações no banco de dados.

## Estrutura do Banco de Dados

O banco de dados é composto pelas seguintes tabelas:

- **PROFESSOR**: Armazena informações sobre os professores.
- **TELEFONE_PROFESSOR**: Armazena os números de telefone dos professores.
- **ALUNO**: Armazena informações sobre os alunos.
- **TURMA**: Armazena informações sobre as turmas, incluindo o professor responsável e o aluno monitor.
- **MATRICULA**: Armazena informações sobre as matrículas dos alunos nas turmas.

## Requisitos

Para rodar este projeto, você precisará do seguinte:

- MySQL Server instalado
- Um cliente MySQL (como MySQL Workbench ou DBeaver)
- Acesso ao terminal (opcional, mas útil para alguns comandos)

## Como Rodar o Projeto

1. **Criar o Banco de Dados e Tabelas**:
   Execute os comandos dos arquivos SQL fornecidos na ordem correta para criar o banco de dados e as tabelas. Você encontrará os arquivos listados abaixo:

   - [**Db_Tb_Creation.sql**](Db_Tb_Creation.sql): Este arquivo contém os comandos para criar o banco de dados e as tabelas necessárias.
   - [**Data.sql**](Data.sql): Este arquivo contém os comandos para inserir dados iniciais nas tabelas.
   - [**01_Alunos_matricula.sql**](01_Alunos_matricula.sql): Este arquivo contém os comandos para gerenciar a matrícula dos alunos.
   - [**02_Alunos_nome.sql**](02_Alunos_nome.sql): Este arquivo contém comandos para atualizar os nomes dos alunos.
   - [**03_Alunos_sem_turma.sql**](03_Alunos_sem_turma.sql): Este arquivo contém comandos para listar alunos sem turmas.
   - [**04_Alunos_turma_1.sql**](04_Alunos_turma_1.sql): Este arquivo contém comandos para gerenciar os alunos na turma 1.
   - [**05_Horário_Patolino.sql**](05_Horário_Patolino.sql): Este arquivo contém comandos relacionados ao horário.

   Para executar os comandos, siga estas etapas:

   a. Abra seu cliente MySQL (como MySQL Workbench ou DBeaver).

   b. Carregue o arquivo `Db_Tb_Creation.sql` e execute os comandos para criar o banco de dados e as tabelas.

   c. Em seguida, carregue o arquivo `Data.sql` e execute os comandos para inserir dados nas tabelas.

   d. Execute os arquivos na seguinte ordem:
   - `01_Alunos_matricula.sql`
   - `02_Alunos_nome.sql`
   - `03_Alunos_sem_turma.sql`
   - `04_Alunos_turma_1.sql`
   - `05_Horário_Patolino.sql`

## Instruções da Atividade
Dado o modelo relacional abaixo que visa resolver uma alocação de alunos e utilizando o aplicativo MySQL Workbench para modelar, construir e executar os comandos SQL, responda as perguntas utilizando comandos SQL que atendam o solicitado:

ALUNO (aluno_id, nome, curso, nivel, idade)
TURMA (turma_id, nometurma, sala, horario)
MATRÍCULA (matricula_id, aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas)

1. Quais os nomes de todos os alunos ?
2. Quais os números das matrículas dos alunos ?
3. Quais os números das matrículas dos alunos que não estão matriculados em uma turma ?
4. Quais os números dos alunos matriculados em uma turma de número '30' ?
5. Qual o horário da turma do aluno 'PATOLINO' ?

