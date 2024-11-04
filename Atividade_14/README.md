flowchart TD
    A["Início"] --> B["Requisição de Autenticação"]
    B --> C{"Usuário Existente?"}
    C -- Sim --> D["Carregar Detalhes do Usuário"]
    C -- Não --> E["Retornar Erro: Usuário Não Encontrado"]
    D --> F["Verificar Senha"]
    F -- Correta --> G["Retornar Detalhes do Usuário"]
    F -- Incorreta --> H["Retornar Erro: Senha Inválida"]
    G --> I["Retornar JWT ou Token de Autenticação"]
    I --> J["Requisição de Usuários"]
    J --> K{"Método Chamado?"}
    K -- getAllUsers --> L["Buscar Todos os Usuários"]
    K -- getUserById --> M["Buscar Usuário pelo ID"]
    K -- createUser --> N["Criar Novo Usuário"]
    K -- updateUser --> O["Atualizar Usuário Existente"]
    K -- deleteUser --> P["Deletar Usuário pelo ID"]
    L --> Q["Retornar Lista de Usuários"]
    M --> R["Retornar Detalhes do Usuário"]
    N --> S["Retornar Novo Usuário Criado"]
    O --> T["Retornar Usuário Atualizado"]
    P --> U["Retornar Confirmação de Deleção"]
    Q --> V["Fim"]
    R --> V
    S --> V
    T --> V
    U --> V
