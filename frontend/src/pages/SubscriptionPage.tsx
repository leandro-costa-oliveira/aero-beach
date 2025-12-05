import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useCategory } from "../hooks/useCategory.ts";
import { CardSubscription } from "../components/CardSubscription/CardSubscription.tsx";
import { useTorneioById } from "../hooks/useTorneioById.ts";
import { CardCategorias } from "../components/CardCategorias/CardCategorias.tsx";

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

  const date = categoria.dataRealizacao
    ? new Date(categoria.dataRealizacao).toLocaleDateString("pt-BR")
    : "A definir";

  return (
    <Container>
      <Row>
        
        <h1 className="mb-4 text-primary display-4 border-bottom pb-2 text-truncate justify-content-between d-flex">
          <span>
            {categoria.genero} - {categoria.nivel} <span className="text-muted fs-5">Página de inscrição</span>
          </span>{" "}
          <span>{date}</span>
        </h1>
      </Row>
      <Row>
        <Col>
          <CardSubscription categoria={categoria}></CardSubscription>
        </Col>
      </Row>
      <Row>
        <h1 className="mb-4 mt-4 text-primary display-6 border-bottom pb-2 text-truncate justify-content-between d-flex">
          Outras categorias
        </h1>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4 mb-2" id="categorias">
        
        {
        (torneio.categorias || []).map((cate) => (
          cateId != cate.id && 
          <Col key={cate.id}>
            <CardCategorias categoria={cate} torneioId={id} />
            </Col>
          )
        )
        }
        
      </Row>
      <span className="text-muted mt-3 text-center">
        *Sua inscrição é individual por categoria. Escolha a categoria desejada,
        clique em "Realizar inscrição", pague o valor apresentado e pronto.
        Automaticamente você estará na lista dos jogadores.*
      </span>
    </Container>
  );
}
