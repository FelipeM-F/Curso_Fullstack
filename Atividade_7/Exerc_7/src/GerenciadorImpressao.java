import java.util.LinkedList;
import java.util.Queue;

public class GerenciadorImpressao {
    private Queue<TrabalhoImpressao> filaTrabalhos;

    public GerenciadorImpressao() {
        this.filaTrabalhos = new LinkedList<>();
    }

    public void adicionarTrabalho(TrabalhoImpressao trabalho) {
        filaTrabalhos.add(trabalho);
        System.out.println("Adicionado: " + trabalho);
    }

    public void processarProximoTrabalho() {
        if (filaTrabalhos.isEmpty()) {
            System.out.println("Nenhum trabalho de impressão na fila.");
            return;
        }
        TrabalhoImpressao trabalho = filaTrabalhos.poll();
        System.out.println("Processando: " + trabalho);
    }

    public void processarTodosTrabalhos() {
        while (!filaTrabalhos.isEmpty()) {
            processarProximoTrabalho();
        }
    }

    public boolean filaVazia() {
        return filaTrabalhos.isEmpty();
    }
}
