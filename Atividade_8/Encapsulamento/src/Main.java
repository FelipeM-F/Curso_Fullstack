public class Main {
    public static void main(String[] args) {
        try {
            // Teste de criação de um produto com valores válidos
            Produto produto1 = new Produto("Celular", 1500.00, 10);
            System.out.println("Produto criado com sucesso:");
            System.out.println("Nome: " + produto1.getNome());
            System.out.println("Preço: " + produto1.getPreco());
            System.out.println("Quantidade em estoque: " + produto1.getQuantidadeEstoque());

            // Teste de modificação dos atributos com valores válidos
            produto1.setPreco(1200.00);
            produto1.setQuantidadeEstoque(8);
            System.out.println("\nProduto após alteração:");
            System.out.println("Novo preço: " + produto1.getPreco());
            System.out.println("Nova quantidade em estoque: " + produto1.getQuantidadeEstoque());

            // Teste de criação de um produto com preço negativo (deve lançar exceção)
            Produto produtoInvalido = new Produto("Notebook", -2000.00, 5);

        } catch (IllegalArgumentException e) {
            System.out.println("\nErro: " + e.getMessage());
        }

        try {
            // Teste de criação de um produto com quantidade negativa (deve lançar exceção)
            Produto produtoInvalido2 = new Produto("Tablet", 1000.00, -5);

        } catch (IllegalArgumentException e) {
            System.out.println("\nErro: " + e.getMessage());
        }

        // Testes da classe ProdutosComDesconto
        try {
            // Teste de criação de um produto com desconto
            ProdutosComDesconto produtoComDesconto = new ProdutosComDesconto("TV", 2000.00, 5);
            System.out.println("\nProduto com desconto criado com sucesso:");
            System.out.println("Nome: " + produtoComDesconto.getNome());
            System.out.println("Preço: " + produtoComDesconto.getPreco());
            System.out.println("Quantidade em estoque: " + produtoComDesconto.getQuantidadeEstoque());

            // Aplicar um desconto válido
            double novoPreco = produtoComDesconto.aplicarDesconto(20);
            System.out.println("Preço após aplicar 20% de desconto: " + novoPreco);

            // Testar desconto inválido (> 50%)
            produtoComDesconto.aplicarDesconto(60); // Deve lançar exceção
        } catch (IllegalArgumentException e) {
            System.out.println("\nErro ao aplicar desconto: " + e.getMessage());
        }

        try {
            // Testar desconto negativo (deve lançar exceção)
            ProdutosComDesconto produtoComDescontoInvalido = new ProdutosComDesconto("Geladeira", 3000.00, 3);
            produtoComDescontoInvalido.aplicarDesconto(-10); // Deve lançar exceção
        } catch (IllegalArgumentException e) {
            System.out.println("\nErro ao aplicar desconto negativo: " + e.getMessage());
        }
    }
}
