import { useEffect, useState } from "react";
import { Alert, Form, Spinner, Table } from "react-bootstrap";
import { apiClient } from "../api/api-client";

type DuplaRanking = {
  id: string;
  pontuacao: number;
  jogador1: {
    nome: string;
  };
  jogador2: {
    nome: string;
  };
  categoria: {
    nivel: string;
  };
  torneio: {
    nome: string | null;
    dataInicio: string;
  };
};

export const Ranking = () => {
  const [categoria, setCategoria] = useState("");
  const [periodo, setPeriodo] = useState(
    new Date().getFullYear().toString(),
  );

  const [ranking, setRanking] = useState<DuplaRanking[]>([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const carregarRanking = async () => {
    try {
      setLoading(true);
      setErro("");

      const { data } = await apiClient.get("/ranking/duplas", {
        params: {
          categoria: categoria || undefined,
          periodo: periodo || undefined,
        },
      });

      setRanking(data);
    } catch (error) {
      console.error(error);
      setErro("Não foi possível carregar o ranking.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarRanking();
  }, [categoria, periodo]);

  return (
    <>
      <h1 className="mb-4">Ranking de Duplas</h1>

      <Form className="d-flex gap-3 mb-4">
        <Form.Group>
          <Form.Label>Categoria</Form.Label>
          <Form.Select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Todas</option>
            <option value="iniciante">Iniciante</option>
            <option value="d">D</option>
            <option value="c">C</option>
            <option value="b">B</option>
            <option value="a">A</option>
            <option value="open">Open</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label>Período</Form.Label>
          <Form.Control
            type="number"
            min={2020}
            max={2100}
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
          />
        </Form.Group>
      </Form>

      {loading && (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      )}

      {erro && <Alert variant="danger">{erro}</Alert>}

      {!loading && !erro && (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Posição</th>
              <th>Dupla</th>
              <th>Categoria</th>
              <th>Pontuação</th>
              <th>Torneio</th>
            </tr>
          </thead>

          <tbody>
            {ranking.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center">
                  Nenhum resultado encontrado.
                </td>
              </tr>
            ) : (
              ranking.map((dupla, index) => (
                <tr key={dupla.id}>
                  <td>{index + 1}</td>
                  <td>
                    {dupla.jogador1.nome} / {dupla.jogador2.nome}
                  </td>
                  <td>{dupla.categoria.nivel}</td>
                  <td>{dupla.pontuacao}</td>
                  <td>{dupla.torneio.nome ?? "-"}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      )}
    </>
  );
};