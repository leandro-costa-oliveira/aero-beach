import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { requestLogin } from "../../api/auth";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const mutation = useMutation<
    { accessToken: string },
    unknown,
    { email: string; password: string }
  >({
    mutationFn: requestLogin,
    onSuccess: (data) => {
      localStorage.setItem("token", data.accessToken);
    },
    onError: (e) => {
      console.log(e);
    },
  });
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    mutation.mutate({ email, password });
  }

  return (
    <Form className="container-sm" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          type="e-mail"
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
        disabled={mutation.isPending}
        className="bg-secondary container mt-4"
      >
        Entrar
      </Button>
    </Form>
  );
}
