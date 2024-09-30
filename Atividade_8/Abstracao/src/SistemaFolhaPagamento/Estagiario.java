package SistemaFolhaPagamento;

class Estagiario extends Funcionario {
    public Estagiario(String nome, double salarioBase) {
        super(nome, salarioBase);
    }

    @Override
    public double calcularSalario() {
        return getSalarioBase();  // Salário do estagiário é o salário base
    }

    @Override
    public double calcularBonus() {
        return calcularSalario() * 0.05;  // Bônus de 5%
    }
}
