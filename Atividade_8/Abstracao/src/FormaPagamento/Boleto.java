package FormaPagamento;

class Boleto extends FormaPagamento {
    private String codigoBarras;
    private boolean pagamentoValidado;

    public Boleto(String codigoBarras) {
        this.codigoBarras = codigoBarras;
    }

    @Override
    public boolean validarPagamento() {
        if (codigoBarras.length() == 47) {
            pagamentoValidado = true;
            System.out.println("Boleto validado.");
        } else {
            pagamentoValidado = false;
            System.out.println("Código de barras do boleto inválido.");
        }
        return pagamentoValidado;
    }

    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Processando pagamento de R$ " + valor + " com boleto.");
        } else {
            System.out.println("Falha ao processar o pagamento com boleto.");
        }
    }
}