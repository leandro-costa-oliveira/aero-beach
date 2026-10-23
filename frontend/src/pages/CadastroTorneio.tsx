import { useState } from "react";
import axios from "axios";
import { Alert, Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../api/api-client";

export function CadastroTorneio() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataLimiteInscricao, setDataLimiteInscricao] = useState("");
  const [federado, setFederado] = useState(false);

  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setErro("");
    setSucesso("");

    if (!nome.trim()) {
      setErro("Informe o nome do torneio.");
      return;
    }

    if (!dataInicio) {
      setErro("Informe a data de início.");
      return;
    }

    if (!dataLimiteInscricao) {
      setErro("Informe a data limite de inscrição.");
      return;
    }

    if (new Date(dataLimiteInscricao) > new Date(dataInicio)) {
      setErro(
        "A data limite de inscrição não pode ser maior que a data de início."
      );
      return;
    }

    try {
      setLoading(true);

      await apiClient.post("/torneios", {
        nome,
        federado,
        dataInicio,
        dataLimiteInscricao,
      });

      setSucesso("Torneio cadastrado com sucesso!");

      setNome("");
      setFederado(false);
      setDataInicio("");
      setDataLimiteInscricao("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErro(
          error.response?.data?.error?.message ??
            "Erro ao cadastrar torneio."
        );
      } else {
        setErro("Erro ao cadastrar torneio.");
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
            <h4 className="mb-0">Cadastro de Torneio</h4>
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
                <Form.Label>Nome do torneio</Form.Label>

                <Form.Control
                  value={nome}
                  disabled={loading}
                  placeholder="Digite o nome do torneio"
                  onChange={(e) => {
                    setNome(e.target.value);
                    setErro("");
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="switch"
                  label="Torneio federado"
                  checked={federado}
                  disabled={loading}
                  onChange={(e) => {
                    setFederado(e.target.checked);
                    setErro("");
                  }}
                />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Data de início</Form.Label>

                    <Form.Control
                      type="date"
                      value={dataInicio}
                      disabled={loading}
                      onChange={(e) => {
                        setDataInicio(e.target.value);
                        setErro("");
                      }}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Data limite de inscrição</Form.Label>

                    <Form.Control
                      type="date"
                      value={dataLimiteInscricao}
                      disabled={loading}
                      onChange={(e) => {
                        setDataLimiteInscricao(e.target.value);
                        setErro("");
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

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