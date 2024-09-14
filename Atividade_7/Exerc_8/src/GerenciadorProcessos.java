import java.util.LinkedList;
import java.util.Queue;

public class GerenciadorProcessos {
    private Queue<Processo> filaProcessos;

    public GerenciadorProcessos() {
        this.filaProcessos = new LinkedList<>();
    }

    public void adicionarProcesso(Processo processo) {
        filaProcessos.add(processo);
        System.out.println("Processo adicionado: " + processo);
    }

    public void executarProximoProcesso() {
        if (filaProcessos.isEmpty()) {
            System.out.println("Nenhum processo na fila.");
            return;
        }
        Processo processo = filaProcessos.poll();
        System.out.println("Executando: " + processo);
    }

    public void executarTodosProcessos() {
        while (!filaProcessos.isEmpty()) {
            executarProximoProcesso();
        }
    }

    public boolean filaVazia() {
        return filaProcessos.isEmpty();
    }
}
