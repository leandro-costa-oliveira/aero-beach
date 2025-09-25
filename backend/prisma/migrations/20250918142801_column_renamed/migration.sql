ALTER TABLE Torneios RENAME COLUMN "data" TO dataInicio;

ALTER TABLE Torneios RENAME COLUMN realizado_em TO dataRealizacao;

ALTER TABLE Torneios RENAME COLUMN data_limite_inscricao TO dataLimiteInscricao;

ALTER TABLE Torneios RENAME COLUMN valor_inscricao TO valorInscricao;

ALTER TABLE Inscricoes RENAME COLUMN torneio_id TO torneioId;

ALTER TABLE Inscricoes RENAME COLUMN jogador_id TO jogadorId;
