import java.util.LinkedList;

public class EditorTexto {

    private StringBuilder documento;
    private LinkedList<Acao> listaUndo;
    private LinkedList<Acao> listaRedo;

    public EditorTexto() {
        documento = new StringBuilder();
        listaUndo = new LinkedList<>();
        listaRedo = new LinkedList<>();
    }

    public void realizarAcao(String tipoAcao, String conteudo) {
        if (tipoAcao.equals("inserir")) {
            documento.append(conteudo);
        } else if (tipoAcao.equals("deletar") && documento.length() >= conteudo.length()) {
            documento.delete(documento.length() - conteudo.length(), documento.length());
        }
        listaUndo.add(new Acao(tipoAcao, conteudo));
        listaRedo.clear();
    }

    public void desfazerAcao() {
        if (!listaUndo.isEmpty()) {
            Acao ultimaAcao = listaUndo.removeLast();
            if (ultimaAcao.getTipoAcao().equals("inserir")) {
                documento.delete(documento.length() - ultimaAcao.getConteudo().length(), documento.length());
            } else if (ultimaAcao.getTipoAcao().equals("deletar")) {
                documento.append(ultimaAcao.getConteudo());
            }
            listaRedo.add(ultimaAcao);
        } else {
            System.out.println("Nenhuma ação para desfazer.");
        }
    }

    public void refazerAcao() {
        if (!listaRedo.isEmpty()) {
            Acao ultimaAcaoDesfeita = listaRedo.removeLast();
            if (ultimaAcaoDesfeita.getTipoAcao().equals("inserir")) {
                documento.append(ultimaAcaoDesfeita.getConteudo());
            } else if (ultimaAcaoDesfeita.getTipoAcao().equals("deletar")) {
                documento.delete(documento.length() - ultimaAcaoDesfeita.getConteudo().length(), documento.length());
            }
            listaUndo.add(ultimaAcaoDesfeita);
        } else {
            System.out.println("Nenhuma ação para refazer.");
        }
    }

    public void salvarDocumento() {
        System.out.println("Documento salvo. Limpando histórico de undo.");
        listaUndo.clear();
        listaRedo.clear();
    }

    public String getConteudoDocumento() {
        return documento.toString();
    }
}
