import { useEffect, useState } from "react";
import axios from "axios";
import { Alert, Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../api/api-client";

interface Torneio {
  id: string;
  nome: string;
}

export function CadastroCategoria() {
  const navigate = useNavigate();

  const [torneios, setTorneios] = useState<Torneio[]>([]);

  const [torneioId, setTorneioId] = useState("");
  const [genero, setGenero] = useState("masculino");
  const [modalidade, setModalidade] = useState("duplas");
  const [nivel, setNivel] = useState("iniciante");
  const [valorInscricao, setValorInscricao] = useState("");
  const [dataRealizacao, setDataRealizacao] = useState("");

  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  useEffect(() => {
    async function carregarTorneios() {
      try {
        const response = await apiClient.get("/torneios");
        setTorneios(response.data.data);
      } catch {
        setErro("Erro ao carregar torneios.");
      }
    }

    carregarTorneios();
  }, []);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setErro("");
    setSucesso("");

    if (!torneioId) {
      setErro("Selecione um torneio.");
      return;
    }

    if (!valorInscricao) {
      setErro("Informe o valor da inscrição.");
      return;
    }

    try {
      setLoading(true);

      await apiClient.post("/categorias", {
        torneioId,
        genero,
        modalidade,
        nivel,
        valorInscricao: Number(valorInscricao),
        dataRealizacao: dataRealizacao || null,
      });

      setSucesso("Categoria cadastrada com sucesso!");

      setTorneioId("");
      setGenero("masculino");
      setModalidade("duplas");
      setNivel("iniciante");
      setValorInscricao("");
      setDataRealizacao("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErro(
          error.response?.data?.error?.message ??
            "Erro ao cadastrar categoria."
        );
      } else {
        setErro("Erro ao cadastrar categoria.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Row className="justify-content-center">
      <Col md={8} lg={7}>
        <Card>
          <Card.Header>
            <h4 className="mb-0">Cadastro de Categoria</h4>
          </Card.Header>

          <Card.Body>
            {erro && (
              <Alert
                variant="danger"
                dismissible
                onClose={() => setErro("")}
              >
                {erro}
              </Alert>
            )}

            {sucesso && (
              <Alert
                variant="success"
                dismissible
                onClose={() => setSucesso("")}
              >
                {sucesso}
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Torneio</Form.Label>

                <Form.Select
                  value={torneioId}
                  disabled={loading}
                  onChange={(e) => {
                    setTorneioId(e.target.value);
                    setErro("");
                  }}
                >
                  <option value="">Selecione um torneio</option>

                  {torneios.map((torneio) => (
                    <option
                      key={torneio.id}
                      value={torneio.id}
                    >
                      {torneio.nome}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Gênero</Form.Label>

                    <Form.Select
                      value={genero}
                      disabled={loading}
                      onChange={(e) => setGenero(e.target.value)}
                    >
                      <option value="masculino">Masculino</option>
                      <option value="feminino">Feminino</option>
                      <option value="misto">Misto</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Modalidade</Form.Label>

                    <Form.Select
                      value={modalidade}
                      disabled={loading}
                      onChange={(e) => setModalidade(e.target.value)}
                    >
                      <option value="duplas">Duplas</option>
                      <option value="simples">Simples</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nível</Form.Label>

                    <Form.Select
                      value={nivel}
                      disabled={loading}
                      onChange={(e) => setNivel(e.target.value)}
                    >
                      <option value="iniciante">Iniciante</option>
                      <option value="d">D</option>
                      <option value="c">C</option>
                      <option value="b">B</option>
                      <option value="a">A</option>
                      <option value="open">Open</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Valor da inscrição</Form.Label>

                    <Form.Control
                      type="number"
                      min="0"
                      step="0.01"
                      value={valorInscricao}
                      disabled={loading}
                      onChange={(e) => {
                        setValorInscricao(e.target.value);
                        setErro("");
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label>Data de realização</Form.Label>

                <Form.Control
                  type="date"
                  value={dataRealizacao}
                  disabled={loading}
                  onChange={(e) => {
                    setDataRealizacao(e.target.value);
                    setErro("");
                  }}
                />
              </Form.Group>

              <div className="d-flex justify-content-between">
                <Button
                  variant="secondary"
                  type="button"
                  disabled={loading}
                  onClick={() => navigate("/admin")}
                >
                  Cancelar
                </Button>

                <Button type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <Spinner
                        animation="border"
                        size="sm"
                        className="me-2"
                      />
                      Salvando...
                    </>
                  ) : (
                    "Salvar"
                  )}
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}