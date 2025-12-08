import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import type { Categoria } from "../../api/torneio.t";

interface CardSubscriptionProps {
  categoria: Categoria;
  torneio?: string;
}

export function CardSubscription({
  categoria,
  torneio,
}: CardSubscriptionProps) {
  const price = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(categoria.valorInscricao);

  const dataRealizacaoFormatada = new Date(
    categoria.dataRealizacao || "a definir"
  ).toLocaleDateString("pt-BR");

  return (
    <Card>
      <Card.Header>
        <h5 className="mb-0 text-dark">Inscrever-se nesta categoria</h5>
      </Card.Header>
      <Card.Body>
        <ListGroup className="mt-1 mb-3" variant="flush">
          {torneio && (
            <ListGroup.Item className="border-secondary fw-semibold">
              Torneio:
              <span className="float-end fw-bold">{torneio}</span>
            </ListGroup.Item>
          )}
          <ListGroup.Item className="border-secondary fw-semibold">
            Categoria:
            <span className="float-end fw-bold text-secondary">
              {categoria.genero} - {categoria.nivel} - {categoria.modalidade}
            </span>
          </ListGroup.Item>
          <ListGroup.Item className="border-secondary fw-semibold">
            Realização:
            <span className="float-end text-primary fw-bold">
              {dataRealizacaoFormatada}
            </span>
          </ListGroup.Item>
          <ListGroup.Item className="border-secondary fw-semibold">
            Valor da inscrição:
            <span className="float-end fw-bold text-success">{price}</span>
          </ListGroup.Item>
        </ListGroup>
        <form action="post">
          <Row className="mb-3 gap-2 justify-content-between" xs={1} lg={2}>
            <Col xs={12} lg={5} >
            <span className="fw-semibold">Jogador Um</span>
            <div className="gap-1 d-flex flex-column">
            <input
              type="text"
              placeholder="Seu nome de usuário"
              className="input"
              />
              <input
                type="email"
                placeholder="Seu email"
                className="input"
                />
                </div>
            </Col>
            <Col xs={12} lg={5} >
            <span className="fw-semibold">Jogador dois</span>
            <div className="gap-1 d-flex flex-column">
              <input
                type="text"
                placeholder="Nome de usuário da dupla"
                className="input"
              />
              <input
                type="email"
                placeholder="email dupla"
                className="input"
              />
            </div>
            </Col>
          </Row>
          <Button variant="success" className="w-100 btn-anim fw-semibold">
            Inscrever-se
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
}
