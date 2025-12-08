import {
  Alert,
  Badge,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { useTorneioById } from "../hooks/useTorneioById";
import { useParams } from "react-router-dom";
import { CardCategorias } from "../components/CardCategorias/CardCategorias";

export function TorneioDetalhesPage() {
  const { id } = useParams();
  console.log(id);

  if (!id) {
    return (
      <Alert variant="danger text-center">
        <h3>Erro ao procurar o torneio</h3>

        <p>
          Não foi possível encontrar esse torneio no servidor. Id inexistente.
        </p>
      </Alert>
    );
  }

  const { data: torneio, isLoading, error } = useTorneioById(id);

  if (!torneio) {
    console.log(torneio);

    return (
      <Alert variant="danger text-center">
        <h3>Erro ao procurar o torneio</h3>

        <p>Não foi possível encontrar esse torneio no servidor.</p>
      </Alert>
    );
  }

  if (isLoading) {
    return (
      <Container className="my-5 text-center">
        <Spinner animation="border" role="status" variant="primary" />

        <p className="mt-2">Carregando torneio...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Alert variant="danger text-center">
        <h3>Erro ao procurar o torneio</h3>

        <p>
          Não foi possível encontrar esse torneio no servidor. Erro:{" "}
          {String(error)}
        </p>
      </Alert>
    );
  }

  const dataInicioFormatada = new Date(torneio.dataInicio).toLocaleDateString(
    "pt-BR"
  );
  const dataLimiteInscricaoFormatada = new Date(
    torneio.dataLimiteInscricao
  ).toLocaleDateString("pt-BR");

  const isFederado = torneio.federado ? "success" : "secondary";
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <h1 className=" text-primary display-4 border-bottom pb-2 text-truncate">
          {torneio.nome}
        </h1>
        <span className="text-muted fs-6">Página do torneio</span>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={10}>
          <Card className="shadow-lg border-light">
            <Card.Header className="bg-light d-flex justify-content-between align-items-center">
              <h5 className="mb-0 text-dark">Informações Principais</h5>
              <Badge bg={isFederado} className="p-2 fs-6">
                {torneio.federado ? "Torneio Federado" : "Não Federado"}
              </Badge>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex align-items-center justify-content-between">
                  <span className="fw-semibold">Início do evento:</span>
                  <span className="float-end text-primary fw-bold">
                    {dataInicioFormatada}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center justify-content-between">
                  <span className="fw-semibold">Fim das inscrições:</span>
                  <span className="float-end text-secondary fw-bold">
                    {dataLimiteInscricaoFormatada}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center justify-content-between bg-light">
                  <span className="fw-semibold">Situação:</span>
                  <span className="float-end text-success fw-bold">
                    {torneio.situacao}
                  </span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h2 className="my-5 text-primary display-6 border-bottom pb-2">
        Categorias Disponíveis
      </h2>

      <Row xs={1} md={2} lg={3} className="g-4 mb-2" id="categorias">
        {(torneio.categorias || []).map((cate) => (
          <Col key={cate.id}>
            <CardCategorias categoria={cate} torneioId={id} />
          </Col>
        ))}
      </Row>
      <span className="text-muted mt-3 text-center">
        *Sua inscrição é individual por categoria. Escolha a categoria desejada,
        clique em "Realizar inscrição", pague o valor apresentado e pronto.
        Automaticamente você estará na lista dos jogadores.*
      </span>
    </Container>
  );
}
