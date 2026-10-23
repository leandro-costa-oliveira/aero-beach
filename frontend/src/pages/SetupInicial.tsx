import { useState, type FormEvent } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../api/api-client";

export function SetupInicial({ onCompleted }: { onCompleted: () => void }) {
  const navigate = useNavigate();
  const [nomeAdministrador, setNomeAdministrador] = useState("");
  const [emailAdministrador, setEmailAdministrador] = useState("");
  const [senhaAdministrador, setSenhaAdministrador] = useState("");
  const [nomeArena, setNomeArena] = useState("");
  const [enderecoArena, setEnderecoArena] = useState("");
  const [erro, setErro] = useState("");
  const [salvando, setSalvando] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErro("");
    setSalvando(true);
    try {
      await apiClient.post("/auth/setup", {
        nomeAdministrador,
        emailAdministrador,
        senhaAdministrador,
        nomeArena,
        enderecoArena: enderecoArena || undefined,
      });
      onCompleted();
      navigate("/login", { replace: true, state: { setupConcluido: true } });
    } catch (error: any) {
      setErro(error?.response?.data?.error?.message ?? "Não foi possível concluir a configuração.");
    } finally {
      setSalvando(false);
    }
  }

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card className="p-4 shadow-sm w-100" style={{ maxWidth: 620 }}>
        <h1 className="h3 mb-2">Configuração inicial</h1>
        <p className="text-muted mb-4">Crie a arena e a conta do primeiro administrador.</p>
        {erro && <Alert variant="danger">{erro}</Alert>}
        <Form onSubmit={handleSubmit}>
          <h2 className="h5">Arena</h2>
          <Form.Group className="mb-3">
            <Form.Label>Nome da arena</Form.Label>
            <Form.Control required minLength={2} value={nomeArena} onChange={(e) => setNomeArena(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Endereço (opcional)</Form.Label>
            <Form.Control value={enderecoArena} onChange={(e) => setEnderecoArena(e.target.value)} />
          </Form.Group>
          <h2 className="h5">Primeiro administrador</h2>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control required minLength={2} value={nomeAdministrador} onChange={(e) => setNomeAdministrador(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control required type="email" value={emailAdministrador} onChange={(e) => setEmailAdministrador(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Senha (mínimo de 8 caracteres)</Form.Label>
            <Form.Control required minLength={8} type="password" value={senhaAdministrador} onChange={(e) => setSenhaAdministrador(e.target.value)} />
          </Form.Group>
          <Button type="submit" disabled={salvando} className="w-100">
            {salvando ? "Salvando..." : "Concluir configuração"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
