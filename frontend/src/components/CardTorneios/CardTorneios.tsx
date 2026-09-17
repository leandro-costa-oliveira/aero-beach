import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import type { Torneio } from "../../../../api-schema/TorneioDTO";

type TorneioProps = {
  torneio: Torneio;
  preco: number | null;
};

export function CardTorneios({ torneio, preco }: TorneioProps) {
  const { id, nome, federado, dataInicio, dataLimiteInscricao } = torneio;

  const dataLimiteInscricaoFormatada = new Date(
    dataLimiteInscricao
  ).toLocaleDateString("pt-BR");

  const dataRealizacaoFormatada = new Date(dataInicio).toLocaleDateString(
    "pt-BR"
  );

  const securePrice = preco ?? 0;
  const inscricoesAbertas = new Date(dataLimiteInscricao) >= new Date();

  return (
    <Card className="shadow-sm h-100 border-0">
      <Card.Body className="p-4 d-flex flex-column gap-3">
        <div className="d-flex justify-content-between align-items-start gap-3">
          <div className="flex-grow-1">
            <Card.Title className="mb-1 fs-5 text-truncate">
              {nome}
            </Card.Title>
            <Card.Subtitle className="text-muted">
              {dataRealizacaoFormatada}
            </Card.Subtitle>
          </div>

          <Badge bg={federado ? "success" : "secondary"} className="text-nowrap">
            {federado ? "Federado" : "Não federado"}
          </Badge>
        </div>

        <div className="d-flex flex-column gap-2">
          <div className="d-flex justify-content-between gap-3">
            <span className="text-muted">Inscrições até</span>
            <strong>{dataLimiteInscricaoFormatada}</strong>
          </div>

          <div className="d-flex justify-content-between gap-3">
            <span className="text-muted">Valor</span>
            <strong>
              {securePrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          </div>
        </div>

        <Badge
          bg={inscricoesAbertas ? "success" : "secondary"}
          className="align-self-start"
        >
          {inscricoesAbertas ? "Inscrições abertas" : "Inscrições encerradas"}
        </Badge>

        <Link
          to={`/torneios/${id}`}
          className="btn btn-outline-primary mt-2"
        >
          Ver detalhes
        </Link>
      </Card.Body>
    </Card>
  );
}