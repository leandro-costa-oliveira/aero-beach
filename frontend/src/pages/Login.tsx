import { useContext, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { useEfetuarLogin } from "../hooks/useEfetuarLogin";
import { AuthContext } from "../Context/AuthContext";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutateAsync, isPending, error } = useEfetuarLogin();
  const { accessToken } = useContext(AuthContext);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await mutateAsync({ email, password });
  }

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card className="p-4 shadow-sm w-100" style={{ maxWidth: "560px" }}>
        {accessToken ? (
          <>
            <h1 className="h3 mb-3">Login bem sucedido</h1>
            <p className="text-muted mb-4">
              Você já pode acessar a área autenticada.
            </p>

            <div className="d-flex gap-2">
              <Link to="/" className="btn btn-primary">
                Voltar para home
              </Link>

              <Link to="/profile" className="btn btn-outline-secondary">
                Ir para perfil
              </Link>
            </div>
          </>
        ) : (
          <>
            <h1 className="h3 mb-3">Login</h1>
            <p className="text-muted mb-4">
              Entre com seu e-mail e senha para continuar.
            </p>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  disabled={isPending}
                  placeholder="nome@dominio.tld"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  disabled={isPending}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              {error && (
                <Alert variant="danger" className="mb-3">
                  {(error as any)?.message ?? "Erro desconhecido"}
                </Alert>
              )}

              <div className="d-flex gap-2">
                <Button type="submit" disabled={isPending}>
                  Entrar
                </Button>

                <Link to="/cadastro" className="btn btn-outline-secondary">
                  Cadastrar
                </Link>
              </div>
            </Form>
          </>
        )}
      </Card>
    </Container>
  );
}