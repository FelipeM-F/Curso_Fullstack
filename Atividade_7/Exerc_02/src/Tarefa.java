public class Tarefa {

    private int idTarefa;
    private String descricao;
    private boolean tarefaConcluida = false;

    public Tarefa(int idTarefa, String descricao) {
        this.idTarefa = idTarefa;
        this.descricao = descricao;
    }

    public int getIdTarefa() {
        return idTarefa;
    }

    public void setIdTarefa(int idTarefa) {
        this.idTarefa = idTarefa;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public boolean isTarefaConcluida() {
        return tarefaConcluida;
    }

    public void setTarefaConcluida(boolean tarefaConcluida) {
        this.tarefaConcluida = tarefaConcluida;
    }

    @Override
    public String toString() {
        return "Tarefa{" +
                "idTarefa=" + idTarefa +
                ", descricao='" + descricao + '\'' +
                ", tarefaConcluida=" + tarefaConcluida +
                '}';
    }
}
