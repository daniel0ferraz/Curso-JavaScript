SELECT
  *
FROM
  estados;

INSERT INTO
  cidades (nome, area, estado_id)
values
  ('Campinas', 795, 25);

INSERT INTO
  cidades (nome, area, estado_id)
values
  ('Niterói', 133.9, 19);

INSERT INTO
  cidades (nome, area, estado_id)
VALUES
  (
    'Caruaru',
    920,
    (
      select
        id
      from
        estados
      where
        sigla = 'PE'
    )
  );

INSERT into
  cidades (nome, area, estado_id)
VALUES
  (
    'Juazeiro do Norte',
    248.2,
    (
      select
        id
      from
        estados
      where
        sigla = 'CE'
    )
  );

  SELECT * FROM cidades;
  
