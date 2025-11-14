import { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useEfetuarLogin } from "../hooks/useEfetuarLogin";
import { AuthContext } from "../Context/AuthContext";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutateAsync, isPending, error } = useEfetuarLogin();
  const { accessToken } = useContext(AuthContext);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await mutateAsync({ email, password });
  }

  return accessToken ? (
    <div>
      <h3 className="container-sm mt-4">Login bem sucedido!</h3>
    </div>
  ) : (
    <Form className="container-sm" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          type="email"
          disabled={isPending}
          placeholder="nome@dominio.tld"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Label className="mt-2">Senha</Form.Label>
        <Form.Control
          type="password"
          disabled={isPending}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        {!!error && <Form.Text className="text-danger">{(error as any)?.message ?? "Erro desconhecido"}</Form.Text>}
      </Form.Group>
      <Button type="submit" disabled={isPending} className="bg-secondary container mt-4">
        Entrar
      </Button>
    </Form>
  );
}
