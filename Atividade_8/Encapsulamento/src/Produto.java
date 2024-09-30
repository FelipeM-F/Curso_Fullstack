public class Produto {
    // Atributos privados
    private String nome;
    private double preco;
    private int quantidadeEstoque;

    // Construtor da classe Produto
    public Produto(String nome, double preco, int quantidadeEstoque) {
        this.nome = nome;
        setPreco(preco); // Validação no setter
        setQuantidadeEstoque(quantidadeEstoque); // Validação no setter
    }

    // Métodos públicos para acessar e modificar os atributos

    // Getter para o nome
    public String getNome() {
        return nome;
    }

    // Setter para o nome
    public void setNome(String nome) {
        this.nome = nome;
    }

    // Getter para o preco
    public double getPreco() {
        return preco;
    }

    // Setter para o preco com validação
    public void setPreco(double preco) {
        if (preco < 0) {
            throw new IllegalArgumentException("O preço não pode ser menor que zero.");
        }
        this.preco = preco;
    }

    // Getter para a quantidade em estoque
    public int getQuantidadeEstoque() {
        return quantidadeEstoque;
    }

    // Setter para a quantidade em estoque com validação
    public void setQuantidadeEstoque(int quantidadeEstoque) {
        if (quantidadeEstoque < 0) {
            throw new IllegalArgumentException("A quantidade em estoque não pode ser menor que zero.");
        }
        this.quantidadeEstoque = quantidadeEstoque;
    }
}
