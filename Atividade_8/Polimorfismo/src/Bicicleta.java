class Bicicleta implements IMeioTransporte {
    @Override
    public void acelerar() {
        System.out.println("A bicicleta está ganhando velocidade lentamente.");
    }

    @Override
    public void frear() {
        System.out.println("A bicicleta está parando.");
    }
}