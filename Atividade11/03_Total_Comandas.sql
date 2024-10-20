-- Listagem das comandas com o valor total de cada uma:
SELECT 
    C.comanda_id, C.data, C.mesa, C.nome_cliente, 
    SUM(I.quantidade * CD.preco_unitario) AS valor_total 
FROM COMANDA C
JOIN ITEM_COMANDA I ON C.comanda_id = I.comanda_id
JOIN CARDAPIO CD ON I.cardapio_id = CD.cardapio_id
GROUP BY C.comanda_id, C.data, C.mesa, C.nome_cliente
ORDER BY C.data;