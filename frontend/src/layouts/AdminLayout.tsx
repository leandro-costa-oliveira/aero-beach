import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export function AdminLayout() {
  return (
    <Container fluid className="py-4">
      <Row>
        <Col md={3} lg={2}>
          <Card>
            <Card.Header>Painel Administrativo</Card.Header>

            <ListGroup variant="flush">
              <ListGroup.Item>Torneios</ListGroup.Item>
              <ListGroup.Item>Categorias</ListGroup.Item>
              <ListGroup.Item>Jogadores</ListGroup.Item>
              <ListGroup.Item>Rankings</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        <Col md={9} lg={10}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}