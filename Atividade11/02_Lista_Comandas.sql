-- Listagem de comandas e seus itens (ordenado por data, código da comanda e nome do café):
SELECT 
    C.comanda_id, C.data, C.mesa, C.nome_cliente, 
    I.comanda_id AS item_comanda_id, CD.nome_cafe, CD.descricao, 
    I.quantidade, CD.preco_unitario, 
    (I.quantidade * CD.preco_unitario) AS preco_total 
FROM COMANDA C
JOIN ITEM_COMANDA I ON C.comanda_id = I.comanda_id
JOIN CARDAPIO CD ON I.cardapio_id = CD.cardapio_id
ORDER BY C.data, C.comanda_id, CD.nome_cafe;
