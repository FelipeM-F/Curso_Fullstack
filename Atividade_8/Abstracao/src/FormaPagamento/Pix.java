package FormaPagamento;

class Pix extends FormaPagamento {
    private String chavePix;
    private boolean pagamentoValidado;

    public Pix(String chavePix) {
        this.chavePix = chavePix;
    }

    @Override
    public boolean validarPagamento() {
        if (chavePix.length() >= 5) {
            pagamentoValidado = true;
            System.out.println("Chave Pix validada.");
        } else {
            pagamentoValidado = false;
            System.out.println("Chave Pix inválida.");
        }
        return pagamentoValidado;
    }

    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Processando pagamento de R$ " + valor + " com Pix.");
        } else {
            System.out.println("Falha ao processar o pagamento com Pix.");
        }
    }
}
