package SistemaFolhaPagamento;
import java.util.ArrayList;
import java.util.List;

class Empresa {
    private List<Funcionario> funcionarios = new ArrayList<>();

    public void adicionarFuncionario(Funcionario funcionario) {
        funcionarios.add(funcionario);
    }

    public void calcularFolhaPagamento() {
        double totalSalarios = 0;
        double totalBonus = 0;

        for (Funcionario funcionario : funcionarios) {
            double salario = funcionario.calcularSalario();
            double bonus = funcionario.calcularBonus();

            totalSalarios += salario;
            totalBonus += bonus;

            System.out.println("Funcionário: " + funcionario.getNome());
            System.out.println("Salário: R$ " + salario);
            System.out.println("Bônus: R$ " + bonus);
            System.out.println();
        }

        System.out.println("Total de Salários: R$ " + totalSalarios);
        System.out.println("Total de Bônus: R$ " + totalBonus);
    }

    public void promoverFuncionario(Funcionario funcionario, String novaPosicao) {
        Funcionario promovido = null;

        switch (novaPosicao.toLowerCase()) {
            case "gerente":
                promovido = new Gerente(funcionario.getNome(), funcionario.getSalarioBase());
                break;
            case "desenvolvedor":
                promovido = new Desenvolvedor(funcionario.getNome(), funcionario.getSalarioBase());
                break;
            case "estagiario":
                promovido = new Estagiario(funcionario.getNome(), funcionario.getSalarioBase());
                break;
            default:
                System.out.println("Cargo desconhecido para promoção.");
                return;
        }

        funcionarios.remove(funcionario);
        funcionarios.add(promovido);
        System.out.println(funcionario.getNome() + " foi promovido para " + novaPosicao + ".");
    }
}
