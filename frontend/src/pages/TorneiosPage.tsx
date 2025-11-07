import { Alert, Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useListarTorneios } from "../api/useListarTorneios";
import { CardTorneios } from "../components/CardTorneios/CardTorneios";

export const TorneiosPage = () => {
  const { data, isLoading, error } = useListarTorneios();

  if (isLoading) {
    return (
      <Container className="my-5 text-center">
        <Spinner animation="border" role="status" variant="primary" />
        <p className="mt-2">Carregando torneios...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Alert variant="danger text-center">
        <h3>Erro ao carregar torneios </h3>
        <p>
          Não foi possível encontrar torneios no servidor. Erro: {String(error)}
        </p>
      </Alert>
    );
  }
  if (!data?.data || data.data.length === 0) {
    return (
      <Alert variant="info text-center">
        <h3>Nenhum torneio encontrado</h3>
        <p>Não existem torneios no momento. Volte mais tarde!</p>
      </Alert>
    );
  }

  return (
    <Container className="py-5">
      <div className="d-flex flex-row justify justify-content-between mb-2">
      <h2>Todos os {data.total} Torneios</h2>
      <Button variant="success">+ Novo torneio</Button>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {data.data.map((torneio) => (
          <Col key={torneio.id}>
            <CardTorneios
              id={torneio.id}
              nome={torneio.nome || "Torneio Sem Nome"}
              federado={torneio.federado}
              realizadoEm={torneio.dataRealizacao || "Sem Data Definida"}
              limiteInscricao={torneio.dataLimiteInscricao}
              preco={torneio.valorInscricao}
            />
          </Col>
        ))}
      </Row>

    </Container>
  );
};
