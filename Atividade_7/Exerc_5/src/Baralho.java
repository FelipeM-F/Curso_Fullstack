import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Baralho {
    private List<Carta> cartas;

    public Baralho() {
        cartas = new ArrayList<>();
        String[] naipes = {"Copas", "Ouros", "Espadas", "Paus"};
        String[] valores = {"Ás", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Valete", "Dama", "Rei"};

        for (String naipe : naipes) {
            for (String valor : valores) {
                cartas.add(new Carta(valor, naipe));
            }
        }

        Collections.shuffle(cartas);
    }

    public Carta darCarta() {
        if (cartas.isEmpty()) {
            throw new IllegalStateException("O baralho está vazio.");
        }
        return cartas.remove(0);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        for (Carta carta : cartas) {
            sb.append(carta).append("\n");
        }
        return sb.toString();
    }

}
