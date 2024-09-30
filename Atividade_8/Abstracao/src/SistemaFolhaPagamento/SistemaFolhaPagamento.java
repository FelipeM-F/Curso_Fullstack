package SistemaFolhaPagamento;

public class SistemaFolhaPagamento {
    public static void main(String[] args) {
    Empresa empresa = new Empresa();

    Funcionario gerente = new Gerente("Carlos", 5000);
    Funcionario desenvolvedor = new Desenvolvedor("Ana", 4000);
    Funcionario estagiario = new Estagiario("Lucas", 1500);

    empresa.adicionarFuncionario(gerente);
    empresa.adicionarFuncionario(desenvolvedor);
    empresa.adicionarFuncionario(estagiario);

    System.out.println("Folha de Pagamento Inicial:");
    empresa.calcularFolhaPagamento();

    empresa.promoverFuncionario(estagiario, "desenvolvedor");

    System.out.println("\nFolha de Pagamento Após Promoção:");
    empresa.calcularFolhaPagamento();
}
}
