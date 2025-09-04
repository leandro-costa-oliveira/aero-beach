import { Container, Row } from "react-bootstrap";

export function Footer() {
  return (
    <footer className={`bg-dark text-white p-1 container-fluid bottom-0 position-absolute`}>
      <Container fluid>
        <Row>
          <p>© 2025 AltSoft. Todos os direitos reservados.</p>
        </Row>
      </Container>
    </footer>
  );
}
