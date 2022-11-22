select data_fatura, count(id) as QtdFaturas
from faturas
group by data_fatura;

SELECT pais_cobranca as pais, count(id), sum(valor_total), avg(valor_total), data_fatura
from faturas 
group by pais_cobranca 
having data_fatura = '2010-02-12';

SELECT pais, count(id)
from clientes
group by pais
having count(id) > 4;

SELECT pais, estado, nome
from clientes
having estado like 'SP';

SELECT id_genero, count(id), sum(preco_unitario) as preco, avg(preco_unitario) as PrecoMedio
from cancoes
group by id_genero;