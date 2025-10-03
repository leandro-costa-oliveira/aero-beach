import { Container } from "react-bootstrap";
import { CardTorneios } from "../components/CardTorneios/CardTorneios.tsx";
import { useEffect, useState } from "react";

type Torneio = {
  id: string;
  nome: string;
  federado: boolean;
  dataRealizacao: string;
  dataLimiteInscricao: string;
  valorInscricao: number;
};

function useGetLastTorneio(
  torneios: (torneios: Torneio) => void,
  errMensage: (mensagem: string) => void
) {
  useEffect(() => {
    fetch("http://localhost:3000/torneios/latest")
      .then((res) => res.json())
      .then((jsonRes) => torneios(jsonRes.tournament))
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

  console.log(torneio)
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
