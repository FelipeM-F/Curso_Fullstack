import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        List<IMeioTransporte> transportes = new ArrayList<>();
        transportes.add(new Carro());
        transportes.add(new Bicicleta());
        transportes.add(new Trem());

        for (IMeioTransporte transporte : transportes) {
            transporte.acelerar();
            transporte.frear();
            System.out.println();
        }
    }
}