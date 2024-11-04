# API de Usuários com Autenticação JWT

## Descrição da atividade
Solucionar bugs encontrados dentro da API

## Pré-requisitos
- Java 17+
- Maven
- Banco de Dados (MySQL configurado por padrão)

## Configuração
1. Clone o repositório.
2. Configure o banco de dados no arquivo `application.properties`.

spring.datasource.url = jdbc:mysql://localhost:3306/{nome do seu banco}?allowPublicKeyRetrieval=true&useSSL=false

spring.datasource.username = {seu usuario}

spring.datasource.password = {sua senha}

3. Execute o projeto com o comando `mvn spring-boot:run` e usando Postman

## Endpoints Principais
- **Criar Usuário**
  - **Rota**: `POST http://localhost:8080/api/users`
  - **Body (JSON)**:
    ```json
    {
      "username": "Felipe2",
      "email": "Felipe@example.com",
      "role": "user",
      "password": "123456"
    }
    ```

- **Login**
  - **Rota**: `POST http://localhost:8080/api/auth/login`
  - **Body (JSON)**:
    ```json
    {
      "username": "Felipe2",
      "password": "123456"
    }
    ```

- **Consultar Usuários**
  - **Rota**: `GET http://localhost:8080/api/users`
  - **Autenticação**: JWT (Bearer Token)

- **Consultar Usuário por ID**
  - **Rota**: `GET http://localhost:8080/api/users/{userId}`
  - **Autenticação**: JWT (Bearer Token)

## Testes com Postman
1. Crie um novo usuário na rota `/api/users`.
2. Faça login em `/api/auth/login` para obter o token JWT.
3. Use o token JWT no campo "Bearer Token" do Postman para acessar as rotas protegidas (`/api/users` e `/api/users/{userId}`).

