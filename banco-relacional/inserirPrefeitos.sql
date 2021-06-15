SELECT
  *
FROM
  cidades;
INSERT INTO
  prefeitos (nome, cidade_id)
VALUES
  ('Rodrigo Neves', 2),
  ('Raquel Lyra', 3),
  ('Zenaldo Coutinho', NULL);
INSERT INTO
  prefeitos (nome, cidade_id)
VALUES
  ('Rafael Greca', NULL);
SELECT
  *
FROM
  prefeitos;
INSERT INTO
  prefeitos (nome, cidade_id)
VALUES
  ('Rodrigo Pinheiro', 3);
  /* Chave duplicada, não é possivel que outro prefeito tome conta de outra cidade */