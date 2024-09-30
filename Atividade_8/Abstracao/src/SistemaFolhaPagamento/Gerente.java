package SistemaFolhaPagamento;

class Gerente extends Funcionario {
    public Gerente(String nome, double salarioBase) {
        super(nome, salarioBase);
    }

    @Override
    public double calcularSalario() {
        return getSalarioBase() * 2;
    }

    @Override
    public double calcularBonus() {
        return calcularSalario() * 0.2;  // Bônus de 20%
    }
}
