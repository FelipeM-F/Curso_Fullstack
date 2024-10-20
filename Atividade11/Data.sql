-- Inserindo dados no CARDAPIO
INSERT INTO CARDAPIO (nome_cafe, descricao, preco_unitario) VALUES
('Expresso', 'Café forte e encorpado', 5.00),
('Cappuccino', 'Café com leite e espuma de leite', 7.50),
('Latte', 'Café com mais leite e menos espuma', 8.00),
('Mocha', 'Café com chocolate e chantilly', 9.00),
('Americano', 'Café diluído em água quente', 4.50);

-- Inserindo dados na COMANDA
INSERT INTO COMANDA (data, mesa, nome_cliente) VALUES
('2024-10-19', 1, 'Alice'),
('2024-10-19', 2, 'Bob'),
('2024-10-18', 3, 'Carlos'),
('2024-10-17', 4, 'Diana'),
('2024-10-20', 5, 'Eva'),
('2024-10-20', 6, 'Felipe'),
('2024-10-21', 7, 'Gabriel'),
('2024-10-21', 8, 'Helena'),
('2024-10-22', 9, 'Isabela'),
('2024-10-22', 10, 'João');

-- Inserindo dados nos ITENS_COMANDA
INSERT INTO ITEM_COMANDA (comanda_id, cardapio_id, quantidade) VALUES
(1, 1, 2), 
(1, 2, 1), 
(2, 3, 1), 
(2, 4, 2), 
(3, 5, 3), 
(4, 1, 1),
(4, 1, 1),
(5, 2, 1), 
(5, 5, 2), 
(10, 2, 2),
(8, 1, 1), 
(6, 1, 3), 
(6, 3, 1), 
(10, 4, 1),
(7, 4, 2);

