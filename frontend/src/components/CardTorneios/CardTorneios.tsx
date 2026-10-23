import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import type { Torneio } from "../../../../api-schema/TorneioDTO";

type TorneioProps = {
  torneio: Torneio;
  preco: number | null;
};

export function CardTorneios({ torneio, preco }: TorneioProps) {
  const {
    id,
    nome,
    federado,
    dataInicio,
    dataLimiteInscricao,
    situacao,
    categorias,
  } = torneio;

  const dataRealizacaoFormatada = new Date(dataInicio).toLocaleDateString(
    "pt-BR"
  );

  const dataLimiteInscricaoFormatada = new Date(
    dataLimiteInscricao
  ).toLocaleDateString("pt-BR");

  const categoriaPrincipal = categorias[0];

  const categoriaTexto = categoriaPrincipal
    ? `${categoriaPrincipal.genero.charAt(0).toUpperCase()}${categoriaPrincipal.genero.slice(
        1
      )} • ${
        categoriaPrincipal.modalidade.charAt(0).toUpperCase() +
        categoriaPrincipal.modalidade.slice(1)
      } • ${categoriaPrincipal.nivel.toUpperCase()}`
    : "Sem categorias";

  const securePrice = preco ?? 0;

  const situacaoConfig = {
    aberto: {
      label: "Aberto",
      bg: "success",
    },
    realizando: {
      label: "Em andamento",
      bg: "warning",
    },
    concluído: {
      label: "Concluído",
      bg: "secondary",
    },
    cancelado: {
      label: "Cancelado",
      bg: "danger",
    },
  } as const;

  const badgeSituacao = situacaoConfig[situacao];

  return (
    <Card className="shadow-sm h-100 border-0">
      <Card.Body className="p-4 d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
          <div className="flex-grow-1">
            <Card.Title className="mb-1 fs-5">{nome}</Card.Title>

            <Card.Subtitle className="text-muted small">
              {categoriaTexto}
            </Card.Subtitle>

            <Card.Text className="text-muted small mb-0 mt-1">
              {dataRealizacaoFormatada}
            </Card.Text>
          </div>

          <Badge
            bg={federado ? "success" : "secondary"}
            className="text-nowrap"
          >
            {federado ? "Federado" : "Não federado"}
          </Badge>
        </div>

        <div className="d-flex flex-column gap-2 mb-3">
          <div className="d-flex justify-content-between">
            <span className="text-muted">Inscrições até</span>
            <strong>{dataLimiteInscricaoFormatada}</strong>
          </div>

          <div className="d-flex justify-content-between">
            <span className="text-muted">Valor inicial</span>
            <strong>
              {securePrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          </div>
        </div>

        <Badge bg={badgeSituacao.bg} className="align-self-start mb-3">
          {badgeSituacao.label}
        </Badge>

        <Link
          to={`/torneios/${id}`}
          className="btn btn-outline-primary mt-auto"
        >
          Ver detalhes
        </Link>
      </Card.Body>
    </Card>
  );
}