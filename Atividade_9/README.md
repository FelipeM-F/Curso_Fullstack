# Estudo de Caso: I&T SOLUTIONS

A multinacional **I&T SOLUTIONS**, especializada no desenvolvimento de sistemas de informação, está ampliando seus negócios no Brasil e precisa urgentemente desenvolver um sistema para controlar e gerenciar seus projetos e os recursos que trabalham nestes projetos.

## Recursos

Entende-se como **recurso** cada funcionário que trabalha nos projetos da I&T SOLUTIONS. Um recurso pode ser classificado como:

- Gerente de projeto
- Analista de negócios
- DBA
- Programador

É preciso saber o nome, o número de registro e o salário de cada recurso, mantendo-se uma base histórica com as datas e valores cada vez que o recurso receber um aumento salarial.

## Telefones e Endereços

Como a **I&T SOLUTIONS** atua em projetos extremamente estratégicos, ela precisa manter todos os telefones de contato de seus recursos atualizados (telefone residencial, comercial, celular, ramal interno, etc.) para, em caso de emergência, poder localizá-los. Também é preciso manter atualizado o endereço residencial de todos os recursos.

## Ferramentas de Programação

Os **programadores** devem conhecer uma ou mais ferramentas de programação. Para isso, deve ser mantido no sistema o nome e a versão da ferramenta em que cada programador tem experiência. Um programador pode programar em várias ferramentas diferentes e uma ferramenta pode ser conhecida por diversos programadores.

## Equipes de Trabalho

A **I&T SOLUTIONS** está acostumada a trabalhar com **equipes de trabalho**, que são responsáveis pelo desenvolvimento de projetos. Um recurso é alocado a uma equipe em particular. As equipes possuem um ou mais recursos alocados. Cada equipe tem:

- Um nome
- Um número pré-definido de recursos

Uma equipe pode trabalhar em um ou mais projetos, porém, visando a qualidade, um projeto só pode ser desenvolvido por uma equipe.

## Projetos

Cada um dos projetos tem:

- Código
- Nome
- Data de início
- Data prevista de término
- Data de término real (somente para os projetos finalizados)
- Status (em andamento, finalizado, aguardando prioridade, etc.)
- Número de horas previstas para o projeto
- Número de horas reais utilizadas nos projetos já finalizados

Um projeto é composto por um conjunto de **atividades**, mantendo-se o registro do código e nome de cada atividade que compõe o projeto. As atividades podem ser realizadas em projetos diferentes.

### Atividades e Tarefas

Cada atividade, por sua vez, é formada por um conjunto de **tarefas específicas**. Os códigos e descrições de cada tarefa também precisam ser registrados no banco de dados.

## Gerenciamento de Projetos

Além disso, a **I&T SOLUTIONS** costuma definir um **gerente** para cada um dos projetos. Um gerente pode gerenciar vários projetos ao mesmo tempo, mas um projeto deve ter apenas um gerente.

---

### Esquema Lógico/Físico

A partir da leitura e interpretação dos requisitos do caso da **I&T SOLUTIONS**, o objetivo é projetar um esquema lógico/físico aderente ao caso.
