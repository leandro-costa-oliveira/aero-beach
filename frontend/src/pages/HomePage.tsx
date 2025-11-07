import { Container, Spinner } from "react-bootstrap";
import { useUltimoTorneio } from "../api/useUltimoTorneio.ts";
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
  if (error) return <p className="text-center text-error">Erro ao carregar o ultimo torneio. {String(error)}</p>;
  if (!torneio) return <p className="text-center">Nenhum torneio encontrado !</p>;

  console.log(torneio);
  return (
    <Container className="col-2 col-md-8">
      <CardTorneios
        id={torneio.id}
        nome={torneio.nome}
        federado={torneio.federado}
        realizadoEm={torneio.dataRealizacao}
        limiteInscricao={torneio.dataLimiteInscricao}
        preco={torneio.valorInscricao}
      />
    </Container>
  );
}
