# Multi-Functional Web Application

Este projeto é um aplicativo web multifuncional desenvolvido em React. O objetivo é aprimorar o código do front-end de um repositório existente, incorporando várias funcionalidades e componentes.

## Funcionalidades

O aplicativo inclui as seguintes funcionalidades e componentes principais:

- **QRCodeGenerator**: Gera códigos QR a partir de uma entrada fornecida pelo usuário.
- **IPAddressFinder**: Localiza o endereço IP e exibe informações sobre ele.
- **MovieSearch**: Permite pesquisar filmes utilizando a API TMDb e exibe resultados em um carrossel.
- **TodoApp**: Gerenciador de tarefas com funcionalidades para adicionar, editar e excluir tarefas.
- **QuizApp**: Um aplicativo de quiz onde os usuários podem responder perguntas e obter uma pontuação final.
- **LanguageTranslator**: Traduz textos entre diferentes idiomas usando uma API de tradução.

## Instalação

Para executar este projeto localmente, siga estes passos:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. **Navegue até o diretório do projeto:**

   ```bash
   cd multi-app
   
3. **Instale as dependências:**
   
    ```bash
   npm install

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev

O aplicativo estará disponível em [http://localhost:5173](http://localhost:5173).
   
## Estrutura do Projeto

- `src/`: Contém o código-fonte do aplicativo.
  - `components/`: Contém os componentes principais como `QRCodeGenerator`, `IPAddressFinder`, etc.
  - `services/`: Contém serviços auxiliares como `AuthContext`, `JwtTokenGenerator`, `useMovieInfo`, etc.
  - `App.jsx`: Componente principal que gerencia a renderização do aplicativo.
  - `index.jsx`: Ponto de entrada para o aplicativo React.
- `public/`: Contém arquivos públicos como `index.html`.
- `App.css`: Arquivo de estilos principais.

## Como Usar

1. **Login**: Para acessar as funcionalidades do aplicativo, faça login usando o componente de login. (usuario; admin e senha: password)
2. **Acesso aos Componentes**: Após o login, você pode acessar os diferentes componentes através da barra de navegação.
3. **Carrossel**: A página principal exibe um carrossel com acesso rápido às funcionalidades principais.

## Dependências

- **React**: Biblioteca principal para a construção da interface do usuário.
- **React Router DOM**: Gerenciamento de rotas no aplicativo.
- **Styled-Components**: Biblioteca para estilização de componentes.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **React Responsive Carousel**: Componente de carrossel para React.

