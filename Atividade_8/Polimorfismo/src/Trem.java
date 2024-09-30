class Trem implements IMeioTransporte {
    @Override
    public void acelerar() {
        System.out.println("O trem está acelerando sobre os trilhos.");
    }

    @Override
    public void frear() {
        System.out.println("O trem está desacelerando gradualmente.");
    }
}