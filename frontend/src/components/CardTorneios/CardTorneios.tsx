import { Badge, Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

type TorneioProps = {
  id: string;
  nome: string;
  federado: boolean;
  realizadoEm: string;
  limiteInscricao: string;
  preco: number | null;
};

export function CardTorneios({
  id,
  nome,
  federado,
  realizadoEm,
  limiteInscricao,
  preco,
}: TorneioProps) {
  const isFederado = federado ? "success" : "secondary";
  const inscricoesStatus =
    realizadoEm > limiteInscricao
      ? { status: "success", data: "inscrições abertas" }
      : { status: "secondary", data: "inscrições encerradas" };

  const dataLimiteInscricaoFormatada = new Date(
    limiteInscricao
  ).toLocaleDateString("pt-BR");
  const dataRealizacaoFormatada = new Date(realizadoEm).toLocaleDateString(
    "pt-BR"
  );

  const seecurePrice = preco ?? 0;
  
  return (
    <Card className="shadow-sm">
      <Card.Header className="bg-light d-flex align-items-center">
        <span className="text-truncate fw-bold me-2 flex-grow-1" title={nome}>{nome}</span>
        <Badge bg={isFederado} className="p-2 flex-shrink-0">
          {federado ? "Torneio Federado" : "Não Federado"}
        </Badge>
      </Card.Header>
      <Card.Body>
        <Badge bg={inscricoesStatus.status} className="p-2 flex-shrink-0">
          {inscricoesStatus.data}
        </Badge>
        <ListGroup className="mt-1 mb-3" variant="flush">
          <ListGroup.Item className="border-secondary">
            Realização:
            <span className="float-end text-primary  fw-bold">
              {dataRealizacaoFormatada}
            </span>
          </ListGroup.Item>
          <ListGroup.Item className="border-secondary">
            Inscrições até:
            <span className="float-end text-secondary  fw-bold">
              {dataLimiteInscricaoFormatada}
            </span>
          </ListGroup.Item>
          <ListGroup.Item className="bg-light">
            Inscrição a partir de:
            <span className="float-end text-success fw-bold">
              R$ {seecurePrice.toFixed(2).replace(".", ",")}
            </span>
          </ListGroup.Item>
        </ListGroup>
        <Link to={`/torneios/${id}`}>
          <Button variant="outline-primary" className="w-100">
            Ver Detalhes
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
