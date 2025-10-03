import { Container } from "react-bootstrap";
import { CardTorneios } from "../components/CardTorneios/CardTorneios.tsx";
import { useEffect, useState } from "react";

type Torneio = {
  id: string;
  nome: string;
  federado: boolean;
  realizadoEm: string;
  limiteInscricao: string;
  preco: number;
};

export function HomePage() {
  const [torneio, setTorneio] = useState<Torneio | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/torneios/latest")
      .then((res) => res.json())
      .then((jsonRes) => setTorneio(jsonRes))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container className="col-12 col-md-8">
      {torneio ? (
        <CardTorneios
          nome={torneio.nome}
          federado={torneio.federado}
          realizadoEm={torneio.realizadoEm}
          limiteInscricao={torneio.limiteInscricao}
          preco={torneio.preco}
        />
      ) : (
        <p>Carregando o ultimo torneio</p>
      )}
    </Container>
  );
}
