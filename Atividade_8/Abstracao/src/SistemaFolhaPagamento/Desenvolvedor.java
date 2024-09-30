package SistemaFolhaPagamento;

class Desenvolvedor extends Funcionario {
    public Desenvolvedor(String nome, double salarioBase) {
        super(nome, salarioBase);
    }

    @Override
    public double calcularSalario() {
        return getSalarioBase() * 1.5;  // Salário de desenvolvedor é 1,5 vezes o salário base
    }

    @Override
    public double calcularBonus() {
        return calcularSalario() * 0.1;  // Bônus de 10%
    }
}