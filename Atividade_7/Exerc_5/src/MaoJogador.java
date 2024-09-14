import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

public class MaoJogador {
    private LinkedList<Carta> cartasJogador;

    public MaoJogador(Baralho baralho) {
        cartasJogador = new LinkedList<>();
        inicializarMao(baralho);
    }

    private void inicializarMao(Baralho baralho) {
        for (int i = 0; i < 6; i++) {
            Carta carta = baralho.darCarta();
            cartasJogador.add(carta);
        }
    }

    public LinkedList<Carta> getCartasJogador() {
        return cartasJogador;
    }

    public void adicionarCarta(Baralho baralho) {
        Carta carta = baralho.darCarta();
        cartasJogador.add(carta);
    }

    public boolean removerCarta(Carta carta) {
        return cartasJogador.remove(carta);
    }

    public LinkedList<Carta> ordenarPorValor(LinkedList<Carta> cartasJogador) {
        cartasJogador.sort(comparadorDeValor); // Utilizando o Comparator externo
        return cartasJogador;
    }

    public LinkedList<Carta> ordenarPorNaipe(LinkedList<Carta> cartasJogador) {
        ordenarPorValor(cartasJogador);
        cartasJogador.sort(COMPARATOR_NAIPE);
        return cartasJogador;
    }

    private static final Map<String, Integer> valorDasCartas = new HashMap<>();

    static {
        valorDasCartas.put("Ás", 1);
        valorDasCartas.put("2", 2);
        valorDasCartas.put("3", 3);
        valorDasCartas.put("4", 4);
        valorDasCartas.put("5", 5);
        valorDasCartas.put("6", 6);
        valorDasCartas.put("7", 7);
        valorDasCartas.put("8", 8);
        valorDasCartas.put("9", 9);
        valorDasCartas.put("10", 10);
        valorDasCartas.put("Valete", 11);
        valorDasCartas.put("Dama", 12);
        valorDasCartas.put("Rei", 13);

    }

    private static final Map<String, Integer> VALOR_NAIPES = new HashMap<>();

    static {
        VALOR_NAIPES.put("Copas", 1);
        VALOR_NAIPES.put("Ouros", 2);
        VALOR_NAIPES.put("Espadas", 3);
        VALOR_NAIPES.put("Paus", 4);
    }

    // Comparator para comparar cartas baseado no valor
    private static final Comparator<Carta> comparadorDeValor = (c1, c2) -> {
        int valorCarta1 = valorDasCartas.getOrDefault(c1.getValor(), 0);
        int valorCarta2 = valorDasCartas.getOrDefault(c2.getValor(), 0);
        return Integer.compare(valorCarta1, valorCarta2);
    };

    // Comparador de cartas por naipe, que pode ser reutilizado
    private static final Comparator<Carta> COMPARATOR_NAIPE = (c1, c2) -> {
        return Integer.compare(VALOR_NAIPES.get(c1.getNaipe()), VALOR_NAIPES.get(c2.getNaipe()));
    };
}
