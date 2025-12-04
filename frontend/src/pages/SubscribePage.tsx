import { Alert, Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useCategory } from "../hooks/useCategory.ts";

export function SubscribePage() {
  const { id } = useParams();
  const {cateId} = useParams();

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

  return(
    <h1>{categoria.genero}</h1>
  )
}
