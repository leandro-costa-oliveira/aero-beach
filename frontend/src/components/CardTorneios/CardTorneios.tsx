import { Badge, Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

type TorneioProps = {
  id: string;
  nome: string;
  federado: boolean;
  realizadoEm: string;
  limiteInscricao: string;
  preco: number;
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
  return (
    <Card className="shadow-sm">
      <Card.Header className="bg-light d-flex justify-content-between align-items-center">
        <span className="fw-bold">{nome}</span>
        <Badge bg={isFederado} className="p-2">
          {federado ? "Torneio Federado" : "Não Federado"}
        </Badge>
      </Card.Header>
      <Card.Body>
        <Badge bg={inscricoesStatus.status} className="p-2">
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
            Valor da inscrição:
            <span className="float-end text-success  fw-bold">
              R$ {preco.toFixed(2).replace(".", ",")}
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
