UPDATE estados
set nome = 'Maranhão'
WHERE  sigla = 'MA'


SELECT nome from estados WHERE sigla = "MA"

UPDATE  estados set
 nome = 'Paraná',
 populacao = 11.32 
WHERE sigla = 'PR'

SELECT est.nome,
      sigla,
      populacao
from estados est
WHERE  sigla = 'PR'