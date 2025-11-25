import { Alert, Badge, Card, Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";
import { useTorneioById } from "../hooks/useTorneioById";
import { useParams } from "react-router-dom";
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

  const dataRealizacaoFormatada = new Date(torneio.dataInicio).toLocaleDateString("pt-BR");
  const dataLimiteInscricaoFormatada = new Date(torneio.dataLimiteInscricao).toLocaleDateString("pt-BR");

  const isFederado = torneio.federado ? "success" : "secondary";

  return (
    <Container className="my-5">
      <h1 className="mb-4 text-primary display-4 border-bottom pb-2">
        {torneio.nome} 
      </h1>
      
      <Card className="shadow-lg border-light">
        <Card.Header className="bg-light d-flex justify-content-between align-items-center">
          <h5 className="mb-0 text-dark">Informações Principais</h5>
          <Badge bg={isFederado} className="p-2 fs-6">
            {torneio.federado ? "Torneio Federado" : "Não Federado"}
          </Badge>
        </Card.Header>
        
        <Card.Footer>
        </Card.Footer>
      </Card>
    </Container>
  );
}