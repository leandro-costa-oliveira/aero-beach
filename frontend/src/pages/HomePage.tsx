import { Alert, Container, Spinner } from "react-bootstrap";
import { useUltimoTorneio } from "../hooks/useUltimoTorneio.ts";
import { CardTorneios } from "../components/CardTorneios/CardTorneios.tsx";

export function HomePage() {
  const { data: torneio, isLoading, error } = useUltimoTorneio();

  
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
        <h3>Erro ao carregar o torneio mais recente </h3>
        <p>
          Não foi possível encontrar o torneio no servidor. Erro: {String(error)}
        </p>
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
  console.log(torneio);
  return (
    <Container className="col-2 col-md-8">
      <p className="fs-5 fw-semibold"> O Torneio Mais Recente:</p>
      <CardTorneios
        id={torneio.id}
        nome={torneio.nome}
        federado={torneio.federado}
        realizadoEm={torneio.dataInicio}
        limiteInscricao={torneio.dataLimiteInscricao}
      />
    </Container>
  );
}
