public class Main {
    public static void main(String[] args) {
        FilaBanco filaBanco = new FilaBanco();

        // Adiciona alguns clientes à fila
        filaBanco.adicionarCliente(new Cliente("Ana", false));
        filaBanco.adicionarCliente(new Cliente("Ana Maria", false));
        filaBanco.adicionarCliente(new Cliente("Felipe", false));
        filaBanco.adicionarCliente(new Cliente("João", true));
        filaBanco.adicionarCliente(new Cliente("Maria", false));
        filaBanco.adicionarCliente(new Cliente("Pedro", true));
        filaBanco.adicionarCliente(new Cliente("José", false));

        // Mostra o estado da fila antes do atendimento
        System.out.println("Fila antes do atendimento:");
        filaBanco.filaClientes.forEach(cliente -> System.out.println(cliente.getNome()  + " - Preferencial: " + cliente.isPreferencial()));

        // Atende um cliente preferencial
        System.out.println("\nAtendendo cliente preferencial:");
        filaBanco.CaixaPreferencial(); // Deve atender o cliente "João"

        // Atende um cliente no Caixa 1
        System.out.println("\nAtendendo cliente no Caixa 1:");
        filaBanco.Caixa1(); // Deve atender o próximo cliente na fila

        // Atende um cliente no Caixa 2
        System.out.println("\nAtendendo cliente no Caixa 2:");
        filaBanco.Caixa2(); // Deve atender o próximo cliente na fila
        System.out.println("\nAtendendo cliente no Caixa 2:");
        filaBanco.Caixa2(); // Deve atender o próximo cliente na fila


        // Mostra o estado da fila após o atendimento
        System.out.println("\nFila após o atendimento:");
        filaBanco.filaClientes.forEach(cliente -> System.out.println(cliente.getNome()  + " - Preferencial: " + cliente.isPreferencial()));
    }
}
