public class ListaHistorico {
    private static final int MAX_TAMANHO = 10; 
    private SinglyLinkedList<URL> listaDeHistorico;

    public ListaHistorico() {
        listaDeHistorico = new SinglyLinkedList<>();
    }

    public void adicionarURL(String endereco) {
        URL novaURL = new URL(endereco);
        if (listaDeHistorico.size() >= MAX_TAMANHO) {
            removerURLAntiga(); 
        }
        listaDeHistorico.add(novaURL); 
    }

    private void removerURLAntiga() {
        if (!listaDeHistorico.isEmpty()) {
            listaDeHistorico.remove(0); 
        }
    }

    public void listarHistorico() {
        if (listaDeHistorico.isEmpty()) {
            System.out.println("Nenhuma URL no histórico.");
            return;
        }

        for (int i = 0; i < listaDeHistorico.size(); i++) {
            URL url = listaDeHistorico.get(i); 
            System.out.println((i + 1) + ": " + url); 
        }
    }
}
