public class SinglyLinkedList<T> { // Define a classe como genérica aceitando o tipo <T>.
    private Node<T> head; // Declara uma referência privada para o primeiro nó da lista.

    // Classe interna estática que define os nós da lista encadeada com tipo genérico <T>.
    private static class Node<T> {
        T data; // Armazena o valor genérico do nó.
        Node<T> next; // Armazena a referência para o próximo nó na lista.

        public Node(T data){ // Construtor para inicializar o nó com um valor do tipo <T>.
            this.data = data; // Define o valor do nó.
            this.next = null; // Inicializa a referência "next" como nula, indicando que este é o último nó.
        }
    }

    public SinglyLinkedList() { // Construtor da classe "SinglyLinkedList".
        this.head = null; // Inicializa a cabeça da lista como nula, indicando que a lista está vazia.
    }

    public void add(T data){ // Método público para adicionar um novo nó ao final da lista.
        Node<T> newNode = new Node<>(data); // Cria um novo nó com o dado fornecido.
        if(this.head == null){ // Verifica se a lista está vazia.
            this.head = newNode; // Se estiver vazia, o novo nó se torna o primeiro nó (head).
        } else { // Se a lista não estiver vazia...
            Node<T> current = this.head; // Começa do primeiro nó.
            while(current.next != null){ // Percorre a lista até encontrar o último nó.
                current = current.next; // Avança para o próximo nó.
            }
            current.next = newNode; // Adiciona o novo nó no final da lista.
        }
    }

    public T get(int index){ // Método público para acessar o valor de um nó em um índice específico.
        Node<T> current = this.head; // Começa do primeiro nó.
        int count = 0; // Inicializa o contador de índices.

        while(current != null){ // Percorre a lista enquanto o nó atual não for nulo.
            if(count == index){ // Verifica se o índice atual corresponde ao índice desejado.
                return current.data; // Retorna o valor do nó no índice especificado.
            }
            count++; // Incrementa o contador de índices.
            current = current.next; // Avança para o próximo nó.
        }

        throw new IndexOutOfBoundsException("Index fora dos limites/inválido"); // Lança uma exceção se o índice estiver fora dos limites da lista.
    }

    public int indexOf(T data) { // Método público para encontrar o índice de um dado específico.
        Node<T> current = this.head; // Começa do primeiro nó.
        int count = 0; // Inicializa o contador de índices.

        while (current != null) { // Percorre a lista enquanto o nó atual não for nulo.
            if (current.data.equals(data)) { // Compara o valor atual com o valor fornecido.
                return count; // Retorna o índice se o valor for encontrado.
            }
            count++; // Incrementa o contador de índices.
            current = current.next; // Avança para o próximo nó.
        }

        return -1; // Retorna -1 se o valor não for encontrado.
    }

    public void remove(int index){ // Método público para remover um nó da lista com base em um índice específico.
        Node<T> current = this.head; // Começa do primeiro nó.

        if(this.head == null){ // Verifica se a lista está vazia.
            throw new IndexOutOfBoundsException("Index fora dos limites/inválido"); // Lança uma exceção se a lista estiver vazia.
        }

        if(index == 0){ // Verifica se o índice é 0 (remoção do primeiro nó).
            this.head = this.head.next; // O segundo nó se torna o novo primeiro nó.
            return; // Sai do método.
        }

        int count = 0; // Inicializa o contador de índices.
        Node<T> previous = null; // Declara uma variável para armazenar a referência ao nó anterior.

        while(current != null && count < index){ // Percorre a lista até o índice desejado ou até o final da lista.
            previous = current; // Armazena o nó atual como o nó anterior.
            current = current.next; // Avança para o próximo nó.
            count++; // Incrementa o contador de índices.
        }

        if(current == null){ // Verifica se o nó atual é nulo (indicando que o índice é inválido).
            throw new IndexOutOfBoundsException("Index fora dos limites/inválido"); // Lança uma exceção se o índice estiver fora dos limites da lista.
        }

        previous.next = current.next; // Remove o nó atual, ligando o nó anterior ao próximo nó.
    }

    int size(){ // Método privado para calcular o número de nós na lista.
        int count = 0; // Inicializa o contador de nós.
        Node<T> current = this.head; // Começa do primeiro nó.

        while(current != null){ // Percorre a lista enquanto o nó atual não for nulo.
            count++; // Incrementa o contador de nós.
            current = current.next; // Avança para o próximo nó.
        }

        return count; // Retorna o número total de nós na lista.
    }

    boolean isEmpty(){ // Método privado para verificar se a lista está vazia.
        return this.head == null; // Retorna true se o primeiro nó for nulo, indicando que a lista está vazia.
    }
}
