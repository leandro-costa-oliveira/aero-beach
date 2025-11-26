import { Card, Badge, ListGroup, Button } from "react-bootstrap";
import type { Categoria } from "../../api/torneio.t";

interface CategoriaProps{
    categoria: Categoria;
}

export function CardCategorias({categoria} : CategoriaProps) {

  const realizationDate = categoria.dataRealizacao
    ? new Date(categoria.dataRealizacao).toLocaleDateString("pt-BR")
    : "A definir";

  const price = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(categoria.valorInscricao);

  return (
    <Card className="shadow-sm h-100">
      <Card.Header className="bg-light d-flex justify-content-between align-items-center">
        <h5 className="mb-0 text-capitalize">
          {categoria.genero} - {categoria.nivel}
        </h5>
        <Badge bg="primary" className="fs-6">
          {categoria.modalidade}
        </Badge>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex justify-content-between">
            <span className="fw-semibold">Nível:</span>
            <span className="fw-semibold">{categoria.nivel.toUpperCase()}</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            <span className="fw-semibold">Valor da Inscrição:</span>
            <span className="text-success fw-bold">{price}</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between">
            <span className="fw-semibold">Data Prevista:</span>
            <span className="text-secondary fw-semibold">{realizationDate}</span>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer>
        <Button variant="outline-success" className="w-100 fw-semibold">
          Realizar inscrição {price}
        </Button>
      </Card.Footer>
    </Card>
  );
}