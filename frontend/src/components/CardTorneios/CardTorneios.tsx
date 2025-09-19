import { Card, Col, ListGroup, Row } from "react-bootstrap";

export function CardTorneios() {
  return (
    <Card className="border">
      <Card.Header className="bg-dark text-light">
        <Row className="">
          <Col>#nomeDoTorneio</Col>
          <Col className="d-flex justify-content-end">#Federado?</Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>#</ListGroup.Item>
          <ListGroup.Item>#</ListGroup.Item>
          <ListGroup.Item>#</ListGroup.Item>
        </ListGroup>
        <Row>
          <Col></Col>
          <Col>#data</Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
