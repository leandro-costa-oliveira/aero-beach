import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useEfetuarLogin } from "../../api/auth";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isPending } = useEfetuarLogin();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    mutate({ email, password });
  }
  return (
    <Form className="container-sm" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          type="email"
          placeholder="nome@dominio.tld"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Label className="mt-2">Senha</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button
        type="submit"
        disabled={isPending}
        className="bg-secondary container mt-4"
      >
        Entrar
      </Button>
    </Form>
  );
}
