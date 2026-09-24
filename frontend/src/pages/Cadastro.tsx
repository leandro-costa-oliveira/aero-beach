import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { cadastrarJogador } from "../api/jogador";
import { SuccessModal } from "../components/SuccessModal/SuccessModal";

export function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    setErro("");

    if (!nome || !email || !password) {
      setErro("Preencha todos os campos.");
      return;
    }

    if (password.length < 6) {
      setErro("A senha deve possuir pelo menos 6 caracteres.");
      return;
    }

    try {
      setLoading(true);

      await cadastrarJogador({
        nome,
        email,
        password,
      });

      setShowSuccess(true);
    } catch {
      setErro("Não foi possível realizar o cadastro.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Container className="py-5 d-flex justify-content-center">
        <Card style={{ maxWidth: "520px", width: "100%" }} className="p-4">
          <h1 className="h3 mb-4">Cadastro</h1>

          {erro && <Alert variant="danger">{erro}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" disabled={loading} className="w-100">
              {loading ? "Cadastrando..." : "Cadastrar"}
            </Button>
          </Form>

          <div className="text-center mt-3">
            Já possui uma conta? <Link to="/login">Entrar</Link>
          </div>
        </Card>
      </Container>

      <SuccessModal
        show={showSuccess}
        onClose={() => navigate("/login")}
      />
    </>
  );
}