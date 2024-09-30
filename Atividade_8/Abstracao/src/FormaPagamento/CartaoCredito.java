package FormaPagamento;

class CartaoCredito extends FormaPagamento {
    private String numeroCartao;
    private boolean pagamentoValidado;

    public CartaoCredito(String numeroCartao) {
        this.numeroCartao = numeroCartao;
    }

    @Override
    public boolean validarPagamento() {
        if (numeroCartao.length() == 16) {
            pagamentoValidado = true;
            System.out.println("Cartão de crédito validado.");
        } else {
            pagamentoValidado = false;
            System.out.println("Número de cartão inválido.");
        }
        return pagamentoValidado;
    }

    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Processando pagamento de R$ " + valor + " com cartão de crédito.");
        } else {
            System.out.println("Falha ao processar o pagamento com cartão de crédito.");
        }
    }
}

