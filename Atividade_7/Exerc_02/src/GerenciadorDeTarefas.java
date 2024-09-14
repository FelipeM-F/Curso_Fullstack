import java.util.LinkedList;

public class GerenciadorDeTarefas {

    private static GerenciadorDeTarefas instancia;
    private LinkedList<Tarefa> listaDeTarefas;

    private GerenciadorDeTarefas() {
        listaDeTarefas = new LinkedList<>();
    }

    // Método público estático para obter a instância única
    public static GerenciadorDeTarefas getInstancia() {
        if (instancia == null) {
            instancia = new GerenciadorDeTarefas();
        }
        return instancia;
    }

    // Método para criar e adicionar uma nova tarefa à lista
    public void criarTarefa(String descricao) {
        int id = listaDeTarefas.size() + 1; // Define o ID como o tamanho da lista + 1
        Tarefa novaTarefa = new Tarefa(id, descricao); // Cria uma nova tarefa com o ID e a descrição fornecida
        listaDeTarefas.add(novaTarefa); // Adiciona a tarefa à lista
    }
    public void removerTarefa(Tarefa tarefa) {
        int index = listaDeTarefas.indexOf(tarefa); // Obtém o índice da tarefa removida
        if (index != -1) {
            listaDeTarefas.remove(index); // Remove a tarefa da lista
            atualizarIds(index); // Atualiza os IDs a partir do índice da tarefa removida
        }
    }

    // Método para listar todas as tarefas
    public LinkedList<Tarefa> listarTarefas() {
        return new LinkedList<>(listaDeTarefas); // Retorna uma cópia da lista para evitar modificações diretas
    }

    // Método para atualizar os IDs das tarefas na lista a partir de um índice específico
    private void atualizarIds(int index) {
        for (int i = index; i < listaDeTarefas.size(); i++) {
            listaDeTarefas.get(i).setIdTarefa(i + 1); // Reatribui o ID com base na nova posição na lista
        }
    }
}
