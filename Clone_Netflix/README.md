# Clone da Netflix

Este projeto é um clone da Netflix construído usando React e outras tecnologias web modernas. Ele visa replicar a funcionalidade principal e a interface do usuário da Netflix, proporcionando aos usuários uma experiência familiar de plataforma de streaming.

## Funcionalidades

- Autenticação de usuário
- Navegação de filmes por categorias e gêneros
- Funcionalidade de busca
- Modal de detalhes do filme com reprodução de trailer
- Design responsivo para vários tamanhos de tela
- Rolagem infinita para categorias de gêneros

## Tecnologias Utilizadas

- React
- React Router
- Styled Components
- Axios
- API do The Movie Database (TMDb)

## Como Começar

### Pré-requisitos

- Node.js (v14 ou posterior)
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/clone-netflix.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd clone-netflix
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure a API:
   Obtenha uma chave de API do TMDb e configure-a no arquivo onde as chamadas à API são feitas:
   ```javascript
   const apiKey = 'SUA_CHAVE_DE_API';
   ```

5. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

6. Abra seu navegador e visite `http://localhost:3000` para ver o aplicativo.

## Estrutura do Projeto

```
/src
├── /components    # Componentes React reutilizáveis
├── /services      # Funções para interagir com a API do TMDb
├── /pages         # Páginas do aplicativo
└── /styles        # Estilos globais e temas
```


## Foram utilizados

- [The Movie Database (TMDb)](https://www.themoviedb.org/) para fornecer a API de dados de filmes
- Netflix pela inspiração e ideias de design
