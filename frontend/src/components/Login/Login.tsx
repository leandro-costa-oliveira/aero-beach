import { Button, Form } from "react-bootstrap";

export function Login() {
  return (
    <Form className="container-sm">
      <Form.Group>
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="e-mail" placeholder="nome@dominio.tld" />
        <Form.Label className="mt-2">Senha</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Button type="submit" className="bg-secondary container mt-4">
        Entrar
      </Button>
    </Form>
  );
}
