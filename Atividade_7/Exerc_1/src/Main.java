public class Main {
    public static void main(String[] args) {
        GerenciadorDeTarefas gerenciador = GerenciadorDeTarefas.getInstancia();

        // Criar tarefas
        gerenciador.criarTarefa("Estudar Java");
        gerenciador.criarTarefa("Fazer compras");
        gerenciador.criarTarefa("Ler um livro");
        gerenciador.criarTarefa("Ligar para o João");
        gerenciador.criarTarefa("Ir à academia");
        gerenciador.criarTarefa("Arrumar o guarda-roupa");
        gerenciador.criarTarefa("Pagar as contas");
        gerenciador.criarTarefa("Assistir a um filme");
        gerenciador.criarTarefa("Cozinhar um novo prato");

        // Listar tarefas
        System.out.println("Tarefas criadas:");
        gerenciador.listarTarefas();
        gerenciador.removerTarefa(3);

        System.out.println("Tarefas após a exclusão:");
        gerenciador.listarTarefas();

        gerenciador.concluirTarefa(1);
        gerenciador.concluirTarefa(5);

        System.out.println("Tarefas após a conclusão:");
        gerenciador.listarTarefas();
    }
}
