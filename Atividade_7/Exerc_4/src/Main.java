import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        EditorTexto editor = new EditorTexto();

        editor.realizarAcao("inserir", "Olá, ");
        editor.realizarAcao("inserir", "mundo!");
        System.out.println("Conteúdo do documento: " + editor.getConteudoDocumento());

        editor.desfazerAcao();
        System.out.println("Conteúdo após desfazer: " + editor.getConteudoDocumento());

        editor.refazerAcao();
        System.out.println("Conteúdo após refazer: " + editor.getConteudoDocumento());

        editor.realizarAcao("deletar", "mundo!");
        System.out.println("Conteúdo após deletar: " + editor.getConteudoDocumento());

        editor.desfazerAcao();
        System.out.println("Conteúdo após desfazer a exclusão: " + editor.getConteudoDocumento());

        editor.salvarDocumento();

        editor.desfazerAcao();
        System.out.println("Conteúdo após tentar desfazer pós-salvamento: " + editor.getConteudoDocumento());
    }


}
