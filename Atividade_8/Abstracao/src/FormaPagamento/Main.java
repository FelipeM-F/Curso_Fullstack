package FormaPagamento;

public class Main {
    public static void main(String[] args) {
        FormaPagamento pagamentoCartaoValido = new CartaoCredito("1234567812345678"); // Número de cartão válido (16 dígitos)
        FormaPagamento pagamentoBoletoValido = new Boleto("12345678901234567890123456789012345678901234567"); // Código de barras válido (47 dígitos)
        FormaPagamento pagamentoPixValido = new Pix("chavepixvalida"); // Chave Pix válida (mais de 5 caracteres)

        FormaPagamento pagamentoCartaoInvalido = new CartaoCredito("12345678"); // Número de cartão inválido (menos de 16 dígitos)
        FormaPagamento pagamentoBoletoInvalido = new Boleto("1234567890"); // Código de barras inválido (menos de 47 dígitos)
        FormaPagamento pagamentoPixInvalido = new Pix("abc"); // Chave Pix inválida (menos de 5 caracteres)

        System.out.println("Pagamentos válidos:");
        pagamentoCartaoValido.processarPagamento(250.00);
        System.out.println();
        pagamentoBoletoValido.processarPagamento(500.00);
        System.out.println();
        pagamentoPixValido.processarPagamento(100.00);
        System.out.println();

        System.out.println("Pagamentos inválidos:");
        pagamentoCartaoInvalido.processarPagamento(250.00);
        System.out.println();
        pagamentoBoletoInvalido.processarPagamento(500.00);
        System.out.println();
        pagamentoPixInvalido.processarPagamento(100.00);
    }
}
