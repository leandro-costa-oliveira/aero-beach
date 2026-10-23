import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Admin() {
  return (
    <>
      <h2 className="mb-4">Painel Administrativo</h2>

      <Row className="g-3">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Torneios</Card.Title>

              <Card.Text>
                Gerenciar torneios cadastrados.
              </Card.Text>
              <Link to="/admin/torneios/cadastro">
              <Button>
                Cadastrar torneio
              </Button>
            </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Categorias</Card.Title>
              <Card.Text>
                Gerenciar categorias disponíveis.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Jogadores</Card.Title>
              <Card.Text>
                Visualizar e administrar jogadores.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Ranking</Card.Title>
              <Card.Text>
                Acompanhar e gerenciar o ranking.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}