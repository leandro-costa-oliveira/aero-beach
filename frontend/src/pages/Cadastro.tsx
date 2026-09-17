import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

export function Cadastro() {
  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card style={{ maxWidth: "520px", width: "100%" }} className="p-4">
        <h1 className="h3 mb-3">Cadastro</h1>
        <p className="text-muted mb-4">
          Página de cadastro em construção.
        </p>

        <div className="d-flex gap-2">
          <Link to="/login" className="btn btn-primary">
            Já tenho conta
          </Link>

          <Link to="/" className="btn btn-outline-secondary">
            Voltar para home
          </Link>
        </div>
      </Card>
    </Container>
  );
}