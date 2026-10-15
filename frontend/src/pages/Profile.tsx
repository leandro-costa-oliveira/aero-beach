import { Badge, Card, Col, Row } from "react-bootstrap";

export function Profile() {
  return (
    <>
      <h1 className="mb-4">Perfil do Jogador</h1>

      <Card className="mb-4">
        <Card.Body>
          <Row className="align-items-center">
            <Col xs="auto">
              <div
                className="rounded-circle bg-secondary"
                style={{
                  width: 80,
                  height: 80,
                }}
              />
            </Col>

            <Col>
              <h3 className="mb-1">
                Nome do jogador
              </h3>

              <p className="text-muted mb-1">
                jogador@email.com
              </p>

              <p className="mb-0">
                Dados principais
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Row className="g-3">
        <Col md={4}>
          <Card>
            <Card.Body className="text-center">
              <Card.Title>
                Inscrições ativas
              </Card.Title>

              <h3>0</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body className="text-center">
              <Card.Title>
                Histórico
              </Card.Title>

              <h3>0</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body className="text-center">
              <Card.Title>
                Status
              </Card.Title>

              <Badge bg="success">
                Ativo
              </Badge>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}