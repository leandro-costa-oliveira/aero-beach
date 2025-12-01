import { Alert, Col, Row, Spinner } from "react-bootstrap";
import { CardTorneios } from "../components/CardTorneios/CardTorneios.tsx";
import { useUltimoTorneio } from "../hooks/useUltimoTorneio.ts";

export function HomePage() {
  const { data: torneio, isLoading, error } = useUltimoTorneio();

  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status" variant="primary" />
        <p className="mt-2">Carregando torneio...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger text-center">
        <h3>Erro ao carregar o torneio mais recente </h3>
        <p>Não foi possível encontrar o torneio no servidor. Erro: {String(error)}</p>
      </Alert>
    );
  }

  if (!torneio) {
    return (
      <Alert variant="info text-center">
        <h3>Nenhum torneio encontrado</h3>
        <p>Não existem torneios no momento. Volte mais tarde!</p>
      </Alert>
    );
  }

  const minPrice = torneio?.categorias?.length ? Math.min(...torneio.categorias.map((c) => c.valorInscricao)) : 0;
  return (
    <Row className="justify-content-center">
      <Col xs={12} md={8} lg={6}>
        <h1 className="mb-4 text-primary display-6 border-bottom pb-2">O Torneio Mais Recente:</h1>

        <CardTorneios
          id={torneio.id}
          nome={torneio.nome}
          federado={torneio.federado}
          realizadoEm={torneio.dataInicio}
          limiteInscricao={torneio.dataLimiteInscricao}
          preco={minPrice}
        />
      </Col>
    </Row>
  );
}
