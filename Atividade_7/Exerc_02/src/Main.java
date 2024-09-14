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
        for (Tarefa tarefa : gerenciador.listarTarefas()) {
            System.out.println(tarefa);
        }

        // Remover a segunda tarefa
        Tarefa tarefaARemover = gerenciador.listarTarefas().get(1); // "Fazer compras"
        gerenciador.removerTarefa(tarefaARemover);

        // Listar tarefas após remoção
        System.out.println("\nTarefas após remoção:");
        for (Tarefa tarefa : gerenciador.listarTarefas()) {
            System.out.println(tarefa);
        }

        gerenciador.removerTarefa(gerenciador.listarTarefas().get(2));

        System.out.println("\nTarefas após remoção:");
        for (Tarefa tarefa : gerenciador.listarTarefas()) {
            System.out.println(tarefa);
        }
        gerenciador.removerTarefa(gerenciador.listarTarefas().get(5));
        System.out.println("\nTarefas após remoção:");
        for (Tarefa tarefa : gerenciador.listarTarefas()) {
            System.out.println(tarefa);
        }
    }
}
