```mermaid
erDiagram
    Recursos {
        int id_recurso PK
        varchar nome_recurso
        varchar numero_registro
        decimal salario_atual
        enum cargo
    }
    HistoricoSalarios {
        int id_historico_salario PK
        int id_recurso FK
        date data_aumento
        decimal valor_salario
    }
    Telefones {
        int id_telefone PK
        int id_recurso FK
        varchar tipo_telefone
        varchar numero_telefone
    }
    Enderecos {
        int id_endereco PK
        int id_recurso FK
        varchar logradouro
        varchar cidade
        varchar estado
        varchar cep
    }
    Ferramentas {
        int id_ferramenta PK
        varchar nome_ferramenta
        varchar versao_ferramenta
    }
    ProgramadorFerramenta {
        int id_programador_ferramenta PK
        int id_recurso FK
        int id_ferramenta FK
    }
    Projetos {
        int id_projeto PK
        varchar nome_projeto
        date data_inicio
        date data_termino_previsto
        date data_termino_real
        varchar status
        int horas_previstas
        int horas_reais
    }
    Atividades {
        int id_atividade PK
        varchar nome_atividade
        int id_projeto FK
    }
    Tarefas {
        int id_tarefa PK
        varchar descricao_tarefa
        int id_atividade FK
    }
    Equipes {
        int id_equipe PK
        varchar nome_equipe
        int num_max_recursos
    }
    EquipeProjeto {
        int id_equipe_projeto PK
        int id_equipe FK
        int id_projeto FK
    }
    GerenteProjeto {
        int id_gerente_projeto PK
        int id_recurso FK
        int id_projeto FK
    }

    %% Relacionamentos
    Recursos ||--o{ HistoricoSalarios : "tem"
    Recursos ||--o{ Telefones : "tem"
    Recursos ||--o{ Enderecos : "tem"
    Recursos ||--o{ ProgramadorFerramenta : "usa"
    ProgramadorFerramenta ||--|{ Ferramentas : "conhece"
    Projetos ||--o{ Atividades : "tem"
    Atividades ||--o{ Tarefas : "tem"
    Projetos ||--o{ EquipeProjeto : "é realizado por"
    Equipes ||--o{ EquipeProjeto : "realiza"
    Projetos ||--o{ GerenteProjeto : "é gerenciado por"
    Recursos ||--o{ GerenteProjeto : "gerencia"
