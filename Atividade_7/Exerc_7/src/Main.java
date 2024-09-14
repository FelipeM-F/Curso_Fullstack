public class Main {
    public static void main(String[] args) {
        // Cria o gerenciador de impressão
        GerenciadorImpressao gerenciador = new GerenciadorImpressao();

        // Adiciona alguns trabalhos de impressão
        gerenciador.adicionarTrabalho(new TrabalhoImpressao("Documento 1");
        gerenciador.adicionarTrabalho(new TrabalhoImpressao("Documento 2");
        gerenciador.adicionarTrabalho(new TrabalhoImpressao("Documento 3");

        // Processa todos os trabalhos
        System.out.println("\nIniciando o processamento dos trabalhos:");
        gerenciador.processarTodosTrabalhos();
    }
}
