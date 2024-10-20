# Projeto Cafeteria BomGosto

Este projeto é um sistema de gerenciamento de vendas para a cafeteria BomGosto. O sistema controla as vendas a partir de comandas, que registram informações sobre as vendas de café, incluindo detalhes dos clientes e itens vendidos.

## Estrutura do Banco de Dados

O banco de dados é composto pelas seguintes tabelas:

- **COMANDA**: Armazena informações sobre a comanda, incluindo código, data, número da mesa e nome do cliente.
- **ITEM_COMANDA**: Armazena detalhes sobre os itens da comanda, incluindo o código do cardápio, quantidade, e total do café vendido.
- **CARDAPIO**: Armazena informações sobre os cafés disponíveis, incluindo nome, descrição e preço unitário.

## Requisitos

Para rodar este projeto, você precisará do seguinte:

- MySQL Server instalado
- Um cliente MySQL (como MySQL Workbench ou DBeaver)
- Acesso ao terminal (opcional, mas útil para alguns comandos)

## Como Rodar o Projeto

1. **Criar o Banco de Dados e Tabelas**:
   Execute os comandos dos arquivos SQL fornecidos na ordem correta para criar o banco de dados e as tabelas. Você encontrará os arquivos listados abaixo:

   - [**Db_BomGosto.sql**](Db_BomGosto.sql): Este arquivo contém os comandos para criar o banco de dados e as tabelas necessárias.
   - [**Data.sql**](Data.sql): Este arquivo contém os comandos para inserir dados iniciais nas tabelas.
   - [**01_Cardapio.sql**](01_Cardapio.sql): Este arquivo contém comandos para listar o cardápio.
   - [**02_Lista_Comandas.sql**](02_Lista_Comandas.sql): Este arquivo contém comandos para listar as comandas e seus itens.
   - [**03_Total_Comandas.sql**](03_Total_Comandas.sql): Este arquivo contém comandos para calcular o total das comandas.
   - [**04_Comandos_Com_Mais_Tipo.sql**](04_Comandos_Com_Mais_Tipo.sql): Este arquivo contém comandos para listar comandas com mais de um tipo de café.
   - [**05_Total_Data.sql**](05_Total_Data.sql): Este arquivo contém comandos para calcular o faturamento total por data.

   Para executar os comandos, siga estas etapas:

   a. Abra seu cliente MySQL (como MySQL Workbench ou DBeaver).

   b. Carregue o arquivo `Db_BomGosto.sql` e execute os comandos para criar o banco de dados e as tabelas.

   c. Em seguida, carregue o arquivo `Data.sql` e execute os comandos para inserir dados nas tabelas.

   d. Execute os arquivos na seguinte ordem:
   - `01_Cardapio.sql`
   - `02_Lista_Comandas.sql`
   - `03_Total_Comandas.sql`
   - `04_Comandos_Com_Mais_Tipo.sql`
   - `05_Total_Data.sql`

## Instruções da Atividade

A cafeteria BomGosto deseja controlar as suas vendas de café. A BomGosto controla suas vendas a partir de uma comanda. Uma comanda tem um código único, data, o número da mesa do cliente e o nome do cliente registrados. Nos itens da comanda é possível relacionar vários cafés listados no cardápio que foram vendidos. Cada item da comanda possui o código do cardápio e a quantidade requisitada deste e, não é possível inserir o mesmo código de cardápio mais de uma vez na mesma comanda. No cardápio é apresentado o nome único do café, a descrição da sua composição e o preço unitário.

Desenvolva os scripts SQL para atender cada uma das questões abaixo:

1) Faça uma listagem do cardápio ordenada por nome;
2) Apresente todas as comandas (código, data, mesa e nome do cliente) e os itens da comanda (código comanda, nome do café, descricão, quantidade, preço unitário e preço total do café) destas ordenados data e código da comanda e, também o nome do café;
3) Liste todas as comandas (código, data, mesa e nome do cliente) mais uma coluna com o valor total da comanda. Ordene por data esta listagem;
4) Faça a mesma listagem das comandas da questão anterior (6), mas traga apenas as comandas que possuem mais do que um tipo de café na comanda;
5) Qual o total de faturamento por data? ordene por data esta consulta.
