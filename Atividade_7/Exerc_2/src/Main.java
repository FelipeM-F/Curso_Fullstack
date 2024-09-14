public class Main {
    public static void main(String[] args) {
        // Cria uma instância da ListaHistorico
        ListaHistorico historico = new ListaHistorico();

        // Adiciona algumas URLs ao histórico
        System.out.println("Adicionando URLs ao histórico...");
        historico.adicionarURL("https://www.google.com");
        historico.adicionarURL("https://www.github.com");
        historico.adicionarURL("https://www.stackoverflow.com");
        historico.adicionarURL("https://www.reddit.com");

        // Exibe o histórico
        System.out.println("\nHistórico atual:");
        historico.listarHistorico();

        // Adiciona mais URLs para testar a remoção da mais antiga
        System.out.println("\nAdicionando mais URLs para testar a remoção de URLs antigas...");
        for (int i = 5; i <= 15; i++) {
            historico.adicionarURL("https://www.site" + i + ".com");
        }

        // Exibe o histórico atualizado
        System.out.println("\nHistórico atualizado:");
        historico.listarHistorico();
    }
}
