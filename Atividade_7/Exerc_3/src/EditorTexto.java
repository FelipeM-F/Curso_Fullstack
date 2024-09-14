public class EditorTexto {
    private StringBuilder textoAtual; 
    private SinglyLinkedList<Acao> historico; 
    private SinglyLinkedList<Acao> desfazer; 

    public EditorTexto() {
        this.textoAtual = new StringBuilder();
        this.historico = new SinglyLinkedList<>();
        this.desfazer = new SinglyLinkedList<>();
    }

    public void adicionarTexto(String texto) {
        textoAtual.append(texto);
        historico.add(new Acao("adicionar", texto));
        desfazer = new SinglyLinkedList<>(); 
    }

    public void removerTexto(int comprimento) {
        if (comprimento > textoAtual.length()) {
            comprimento = textoAtual.length();
        }
        String textoRemovido = textoAtual.substring(textoAtual.length() - comprimento);
        textoAtual.delete(textoAtual.length() - comprimento, textoAtual.length());
        historico.add(new Acao("remover", textoRemovido));
        desfazer = new SinglyLinkedList<>(); 
    }

    public void desfazer() {
        if (historico.isEmpty()) {
            throw new IllegalStateException("Nenhuma ação para desfazer.");
        }
        Acao acao = historico.get(historico.size() - 1); // Pega a última ação.
        historico.remove(historico.size() - 1); // Remove a última ação do histórico.
        desfazer.add(acao); // Adiciona a ação ao histórico de desfazer.

        if (acao.getTipo().equals("adicionar")) {
            textoAtual.delete(textoAtual.length() - acao.getTexto().length(), textoAtual.length());
        } else if (acao.getTipo().equals("remover")) {
            textoAtual.append(acao.getTexto());
        }
    }

    public void refazer() {
        if (desfazer.isEmpty()) {
            throw new IllegalStateException("Nenhuma ação para refazer.");
        }
        Acao acao = desfazer.get(desfazer.size() - 1); // Pega a última ação para refazer.
        desfazer.remove(desfazer.size() - 1); // Remove a última ação do histórico de desfazer.

        if (acao.getTipo().equals("adicionar")) {
            textoAtual.append(acao.getTexto());
        } else if (acao.getTipo().equals("remover")) {
            textoAtual.delete(textoAtual.length() - acao.getTexto().length(), textoAtual.length());
        }
        historico.add(acao); // Re-adiciona a ação ao histórico principal.
    }

    public String getTextoAtual() {
        return textoAtual.toString();
    }
}
