import { Card } from "react-bootstrap";

export function Admin() {
  return (
    <Card>
      <Card.Body>
        <h2>Painel Administrativo</h2>
        <p className="text-muted">
          Selecione uma opção do menu lateral para começar.
        </p>
      </Card.Body>
    </Card>
  );
}