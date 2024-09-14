public class Main {
    public static void main(String[] args) {
        // Cria uma instância do EditorTexto.
        EditorTexto editor = new EditorTexto();

        // Adiciona texto ao editor.
        editor.adicionarTexto("Olá, mundo!");
        System.out.println("Texto Atual: " + editor.getTextoAtual()); // Esperado: "Olá, mundo!"

        // Remove parte do texto.
        editor.removerTexto(6); // Remove "mundo!"
        System.out.println("Texto Atual: " + editor.getTextoAtual()); // Esperado: "Olá, "

        // Desfaz a última ação (remoção de texto).
        editor.desfazer();
        System.out.println("Texto Atual após desfazer: " + editor.getTextoAtual()); // Esperado: "Olá, mundo!"

        // Refaz a última ação desfeita (remoção de texto).
        editor.refazer();
        System.out.println("Texto Atual após refazer: " + editor.getTextoAtual()); // Esperado: "Olá, "

        // Adiciona mais texto.
        editor.adicionarTexto("como vai?");
        System.out.println("Texto Atual: " + editor.getTextoAtual()); // Esperado: "Olá, como vai?"

        // Remove uma parte do texto.
        editor.removerTexto(9); // Remove "como vai?"
        System.out.println("Texto Atual: " + editor.getTextoAtual()); // Esperado: "Olá, "

        // Desfaz a última ação (remoção de texto).
        editor.desfazer();
        System.out.println("Texto Atual após desfazer: " + editor.getTextoAtual()); // Esperado: "Olá, como vai?"

        // Refaz a última ação desfeita (remoção de texto).
        editor.refazer();
        System.out.println("Texto Atual após refazer: " + editor.getTextoAtual()); // Esperado: "Olá, "
    }
}

