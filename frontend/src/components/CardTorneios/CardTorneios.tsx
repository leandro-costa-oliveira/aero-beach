import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";

type TorneioProps = {
  id: string;
  nome: string;
  federado?: boolean;
  realizadoEm: string;
  limiteInscricao: string;
  preco: number;
};

export function CardTorneios({
  nome,
  federado,
  realizadoEm,
  limiteInscricao,
  preco,
}: TorneioProps) {
  return (
    <Card className="border-dark">
      <Card.Header className="bg-dark text-light">
        <Row>
          <Col>{nome}</Col>
          <Col className="d-flex justify-content-end">
            {federado ? "Federado" : "Não Federado"}
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <div className="d-flex justify-content-end text-secondary">
          {new Date(realizadoEm).toLocaleDateString()}
        </div>
        <ListGroup className="mt-2 mb-4">
          <ListGroup.Item className="border-secondary">Inscrições até: {new Date(limiteInscricao).toLocaleDateString()}</ListGroup.Item>
          <ListGroup.Item className="border-secondary">Valor do incrição: {preco}</ListGroup.Item>
        </ListGroup>
            <Button variant="outline-primary" className="w-100">Ver Detalhes</Button>
      </Card.Body>
    </Card>
  );
}