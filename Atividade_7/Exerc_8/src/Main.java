//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        GerenciadorProcessos gerenciador = new GerenciadorProcessos();

        gerenciador.adicionarProcesso(new Processo("Processo1"));
        gerenciador.adicionarProcesso(new Processo("Processo2"));
        gerenciador.adicionarProcesso(new Processo("Processo3"));

        gerenciador.executarProximoProcesso();
        gerenciador.executarTodosProcessos();
    }
}