import { Alert, Badge, Card, Col, ListGroup, Row } from "react-bootstrap";
import { indicadoresMock, rankingMock } from "./rankingMock";

export function RankingResumo() {
  const mostrarDadosMockados = import.meta.env.DEV;

  return (
    <>
      <div className="d-flex align-items-center gap-2 mb-4">
        <h2 className="mb-0">Ranking e resumo</h2>

        {mostrarDadosMockados && (
          <Badge bg="secondary">Dados de demonstração</Badge>
        )}
      </div>

      {!mostrarDadosMockados ? (
        <Alert variant="info">
          Ranking e indicadores da arena ainda indisponíveis.
        </Alert>
      ) : (
        <Row className="g-4">
          <Col xs={12} lg={7}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <Card.Title>Top jogadores</Card.Title>

                <ListGroup variant="flush">
                  {rankingMock.map((jogador) => (
                    <ListGroup.Item
                      key={jogador.posicao}
                      className="d-flex justify-content-between px-0"
                    >
                      <span>
                        {jogador.posicao}º {jogador.nome}
                      </span>

                      <strong>{jogador.pontos} pts</strong>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} lg={5}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <Card.Title>Resumo da arena</Card.Title>

                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex justify-content-between px-0">
                    <span>Torneios ativos</span>
                    <strong>{indicadoresMock.torneios}</strong>
                  </ListGroup.Item>

                  <ListGroup.Item className="d-flex justify-content-between px-0">
                    <span>Jogadores</span>
                    <strong>{indicadoresMock.atletas}</strong>
                  </ListGroup.Item>

                  <ListGroup.Item className="d-flex justify-content-between px-0">
                    <span>Categorias</span>
                    <strong>{indicadoresMock.categorias}</strong>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
}