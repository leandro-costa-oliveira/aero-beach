import logo from "../../assets/img/aero-logo.png";
import { Col, Container, Nav, Row } from "react-bootstrap";
import index from '../../index.module.css'

export function Footer() {
  return (
    <footer className={`bg-dark container-fluid mt-auto d-flex py-4 px-5`}>
      <Container fluid className="border-top pt-3">
        <Row className="m-2">
          <Col>
            <div className="d-flex flex-row">
              <img src={logo} alt="AeroBeach" height="44"/>
              <p className="m-0 px-3 py-2 text-light">© 2025 AltSoft. Todos os direitos reservados.</p>
            </div>
          </Col>
          <Col>
            <Nav className="d-flex justify-content-end">
                <Nav.Link href='#inicio' className={index.lightLink}>Inicio</Nav.Link>
                <Nav.Link href='#torneios' className={index.lightLink}>Torneios</Nav.Link>
                <Nav.Link href='#rankings' className={index.lightLink}>Rankings</Nav.Link>
                <Nav.Link href='#sobre' className={index.lightLink}>Sobre</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
