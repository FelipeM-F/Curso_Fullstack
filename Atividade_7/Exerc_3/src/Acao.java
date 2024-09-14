public class Acao {
    private String tipo; 
    private String texto; 

    public Acao(String tipo, String texto) {
        this.tipo = tipo;
        this.texto = texto;
    }

    public String getTipo() {
        return tipo;
    }

    public String getTexto() {
        return texto;
    }
}
