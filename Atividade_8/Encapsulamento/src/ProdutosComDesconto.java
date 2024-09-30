public class ProdutosComDesconto extends Produto {

    public ProdutosComDesconto(String nome, double preco, int quantidadeEstoque) {
        super(nome, preco, quantidadeEstoque);
    }

    // Método para aplicar o desconto
    public double aplicarDesconto(double porcentagem) {
        if (porcentagem < 0 || porcentagem > 50) {
            throw new IllegalArgumentException("O desconto não pode ser menor que 0% ou maior que 50%.");
        }
        double novoPreco = getPreco() * (1 - (porcentagem / 100));
        return novoPreco;
    }
}
