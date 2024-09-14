public class Main {
    public static void main(String[] args) {
        // Cria um novo baralho
        Baralho baralho = new Baralho();

        // Cria uma mão de jogador a partir do baralho
        MaoJogador maoJogador = new MaoJogador(baralho);

        // Exibe a mão inicial do jogador
        System.out.println("Mão inicial do jogador:");
        System.out.println(maoJogador.getCartasJogador());


        // Adiciona uma carta à mão do jogador
        maoJogador.adicionarCarta(baralho);
        System.out.println("\nMão após adicionar uma carta:");
        System.out.println(maoJogador.getCartasJogador());


        // Remove uma carta da mão do jogador
        Carta cartaRemovida = maoJogador.getCartasJogador().get(3);
        maoJogador.removerCarta(cartaRemovida);
        System.out.println("\nMão após remover a carta " + cartaRemovida + ":");
        System.out.println(maoJogador.getCartasJogador());


        // Ordena a mão por valor
        System.out.println("\nMão ordenada por valor:");
        maoJogador.ordenarPorValor(maoJogador.getCartasJogador());
        System.out.println(maoJogador.getCartasJogador());


        // Ordena a mão por naipe
        System.out.println("\nMão ordenada por naipe:");
        maoJogador.ordenarPorNaipe(maoJogador.getCartasJogador());
        System.out.println(maoJogador.getCartasJogador());

    }
}
