public class Main {
    public static void main(String[] args) {
        Funcionario gerente = new Gerente("Carlos", 5000.00);
        Funcionario desenvolvedor = new Desenvolvedor("Ana", 3000.00);

        gerente.trabalhar();
        System.out.println("Gerente " + gerente.getNome() + " bônus: " + gerente.calcularBonus());
        desenvolvedor.trabalhar();
        System.out.println("Desenvolvedor " + desenvolvedor.getNome() + " bônus: " + desenvolvedor.calcularBonus());
    }
}