import java.util.LinkedList;
import java.util.Queue;

public class FilaBanco {
    Queue<Cliente> filaClientes;

    public FilaBanco() {
        this.filaClientes = new LinkedList<>();
    }

    public void adicionarCliente(Cliente cliente) {
        filaClientes.add(cliente);
    }

    private Cliente atenderCliente() {
        if (filaClientes.isEmpty()) {
            System.out.println("Sem clientes");
            return null;
        }
        return filaClientes.poll();
    }

    public void Caixa1() {
        atenderCliente();
    }

    public void Caixa2() {
        atenderCliente();
    }

    public void CaixaPreferencial() {
        Queue<Cliente> novaFila = new LinkedList<>();
        Cliente clientePreferencial = null;

        while (!filaClientes.isEmpty()) {
            Cliente clienteAtual = filaClientes.poll();
            if (clienteAtual.isPreferencial() && clientePreferencial == null) {
                clientePreferencial = clienteAtual; // Armazena o primeiro cliente preferencial encontrado
            } else {
                novaFila.add(clienteAtual); // Adiciona os clientes não preferenciais ou preferenciais subsequentes
            }
        }

        // Se um cliente preferencial foi encontrado, ele será atendido agora
        if (clientePreferencial == null) {
            System.out.println("Nenhum cliente preferencial na fila");
        }

        // Substitui a fila original pela nova fila que contém os clientes restantes
        filaClientes = novaFila;
    }
}
