import { Container, Row } from "react-bootstrap";
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={`${styles.footer} bg-dark text-white p-1 container-fluid`}>
      <Container fluid>
        <Row className="bg-dark">
          <p>© 2025 AltSoft. Todos os direitos reservados.</p>
        </Row>
      </Container>
    </footer>
  );
}
