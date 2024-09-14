public class Acao {
    private String tipoAcao;
    private String conteudo;

    public Acao(String tipoAcao, String conteudo) {
        this.tipoAcao = tipoAcao;
        this.conteudo = conteudo;
    }

    public String getTipoAcao() {
        return tipoAcao;
    }

    public String getConteudo() {
        return conteudo;
    }

    @Override
    public String toString() {
        return "Ação: " + tipoAcao + " | Conteúdo: " + conteudo;
    }
}
