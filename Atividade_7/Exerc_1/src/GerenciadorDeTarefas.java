import java.util.LinkedList;

public class GerenciadorDeTarefas {

    private static GerenciadorDeTarefas instancia;
    private SinglyLinkedList<Tarefa> listaDeTarefas;

    private GerenciadorDeTarefas() {
        listaDeTarefas = new SinglyLinkedList<>();
    }

    public static GerenciadorDeTarefas getInstancia() {
        if (instancia == null) {
            instancia = new GerenciadorDeTarefas();
        }
        return instancia;
    }

    public void criarTarefa(String descricao) {
        int id = listaDeTarefas.size() + 1; 
        Tarefa novaTarefa = new Tarefa(id, descricao); 
        listaDeTarefas.add(novaTarefa); 
        }
    public void removerTarefa(int index) {
        if (index != -1) {
            listaDeTarefas.remove(index); 
            atualizarIds(index); 
        }
    }
    public void concluirTarefa(int index) {
        if (index != -1) {
            Tarefa tarefa = listaDeTarefas.get(index);
            tarefa.setTarefaConcluida();
        }
    }
    public void listarTarefas() {
        if (listaDeTarefas.isEmpty()) {
            System.out.println("Nenhuma tarefa encontrada.");
            return;
        }

        for (int i = 0; i < listaDeTarefas.size(); i++) {
            Tarefa tarefa = listaDeTarefas.get(i); 
            System.out.println("ID: " + tarefa.getIdTarefa() + " - Descrição: " + tarefa.getDescricao() + " - Concluída: " + tarefa.getStatus());
        }
    }

    private void atualizarIds(int index) {
        for (int i = index; i < listaDeTarefas.size(); i++) {
            listaDeTarefas.get(i).setIdTarefa(i + 1); 
        }
    }
}
