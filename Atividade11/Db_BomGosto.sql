CREATE DATABASE BomGosto;
USE BomGosto;

CREATE TABLE CARDAPIO (
    cardapio_id INT AUTO_INCREMENT PRIMARY KEY,
    nome_cafe VARCHAR(100) UNIQUE NOT NULL,
    descricao TEXT,
    preco_unitario DECIMAL(10, 2) NOT NULL
);

CREATE TABLE COMANDA (
    comanda_id INT AUTO_INCREMENT PRIMARY KEY,
    data DATE NOT NULL,
    mesa INT,
    nome_cliente VARCHAR(100)
);

CREATE TABLE ITEM_COMANDA (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    comanda_id INT,
    cardapio_id INT,
    quantidade INT NOT NULL,
    FOREIGN KEY (comanda_id) REFERENCES COMANDA(comanda_id) ON DELETE CASCADE,
    FOREIGN KEY (cardapio_id) REFERENCES CARDAPIO(cardapio_id) ON DELETE CASCADE
);
