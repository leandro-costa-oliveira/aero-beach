import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { apiClient } from "../api/api-client.ts";
import { CardTorneios } from "../components/CardTorneios/CardTorneios.tsx";

type Torneio = {
  id: string;
  nome: string;
  federado: boolean;
  dataRealizacao: string;
  dataLimiteInscricao: string;
  valorInscricao: number;
};

function useGetLastTorneio(torneios: (torneios: Torneio) => void, errMensage: (mensagem: string) => void) {
  useEffect(() => {
    apiClient
      .get<{ tournament: Torneio }>("/torneios/latest")
      .then((jsonRes) => torneios(jsonRes.data.tournament))
      .catch((err) => {
        console.error(err);
        if (err instanceof Error) {
          errMensage(err.message);
        }
      });
  }, []);
}

export function HomePage() {
  const [torneio, setTorneio] = useState<Torneio | null>(null);

  useGetLastTorneio(
    (torneios) => setTorneio(torneios),
    (errMensage) => console.log(errMensage)
  );

  console.log(torneio);
  return (
    <Container className="col-2 col-md-8">
      {torneio ? (
        <CardTorneios
          id={torneio.id}
          nome={torneio.nome}
          federado={torneio.federado}
          realizadoEm={torneio.dataRealizacao}
          limiteInscricao={torneio.dataLimiteInscricao}
          preco={torneio.valorInscricao}
        />
      ) : (
        <p className="text-center">Carregando o ultimo torneio...</p>
      )}
    </Container>
  );
}
