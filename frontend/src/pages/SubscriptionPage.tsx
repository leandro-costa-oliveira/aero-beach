import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useCategory } from "../hooks/useCategory.ts";
import { CardSubscription } from "../components/CardSubscription/CardSubscription.tsx";
import { useTorneioById } from "../hooks/useTorneioById.ts";

export function SubscriptionPage() {
  const { id } = useParams();
  const { cateId } = useParams();

  if (!cateId) {
    return (
      <Alert variant="danger text-center">
        <h3>Erro ao procurar o categoria</h3>
        <p>
          Não foi possível encontrar essa categoria no servidor. Id inexistente.
        </p>
      </Alert>
    );
  }

  if (!id) {
    return (
      <Alert variant="danger text-center">
        <h3>Erro ao procurar o categoria</h3>
        <p>
          Não foi possível encontrar essa categoria no servidor. Id inexistente.
        </p>
      </Alert>
    );
  }

  const { data: categoria, isLoading, error } = useCategory(id, cateId);
  const { data: torneio } = useTorneioById(id);

  if (!torneio) {
    console.log(torneio);

    return (
      <Alert variant="danger text-center">
        <h3>Erro ao procurar o torneio</h3>
        <p>Não foi possível encontrar esse torneio no servidor.</p>
      </Alert>
    );
  }

  if (!categoria) {
    return (
      <Alert variant="danger text-center">
        <h3>Erro ao procurar a categoria</h3>
        <p>Não foi possível encontrar essa categoria no servidor.</p>
      </Alert>
    );
  }

  if (isLoading) {
    return (
      <Container className="my-5 text-center">
        <Spinner animation="border" role="status" variant="primary" />
        <p className="mt-2">Carregando categoria...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Alert variant="danger text-center">
        <h3>Erro ao procurar categoria</h3>
        <p>
          Não foi possível encontrar essa categoria no servidor. Erro:{" "}
          {String(error)}
        </p>
      </Alert>
    );
  }

  return (
    <Container>
      <Row className="mb-4">
        <h1 className="text-primary display-4 border-bottom pb-2 text-truncate">
          {categoria.genero} - {categoria.nivel}
        </h1>
        <span className="text-muted fs-6">Página de inscrição</span>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={10}>
          <CardSubscription
            categoria={categoria}
            torneio={torneio.nome}
          ></CardSubscription>
        </Col>
      </Row>
    </Container>
  );
}
