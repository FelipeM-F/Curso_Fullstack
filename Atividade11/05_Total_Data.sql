-- Total de faturamento por data:
SELECT 
    C.data, 
    SUM(I.quantidade * CD.preco_unitario) AS faturamento_total 
FROM COMANDA C
JOIN ITEM_COMANDA I ON C.comanda_id = I.comanda_id
JOIN CARDAPIO CD ON I.cardapio_id = CD.cardapio_id
GROUP BY C.data
ORDER BY C.data;