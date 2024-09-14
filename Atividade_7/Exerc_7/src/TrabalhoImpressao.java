public class TrabalhoImpressao {
    private String descricao;

    public TrabalhoImpressao(String descricao ) {
        this.descricao = descricao;
    }

    public String getDescricao() {
        return descricao;
    }
    

    @Override
    public String toString() {
        return "TrabalhoImpressao{descricao='" + descricao + '}';
    }
}
