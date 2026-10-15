import { useContext } from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export function Profile() {
  const { setAccessToken } = useContext(AuthContext);
  const navigate = useNavigate();

  function logout() {
    setAccessToken(null);
    navigate("/login");
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">Perfil do Jogador</h1>

        <Button
          variant="outline-danger"
          onClick={logout}
        >
          Sair
        </Button>
      </div>

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
                Meu Perfil
              </h3>

              <p className="text-muted mb-1">
                Dados do jogador serão exibidos aqui.
              </p>

              <p className="mb-0">
                Área autenticada do jogador.
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

              <h3>—</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body className="text-center">
              <Card.Title>
                Histórico
              </Card.Title>

              <h3>—</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body className="text-center">
              <Card.Title>
                Status
              </Card.Title>

              <Badge bg="secondary">
                Em breve
              </Badge>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}