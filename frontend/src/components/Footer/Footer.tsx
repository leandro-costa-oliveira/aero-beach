import logo from "../../assets/img/aero-logo.png";
import { Col, Container, Row } from "react-bootstrap";
import '../../index.css'

export function Footer() {
  return (
    <footer className={`bg-dark container-fluid mt-auto d-flex py-4 px-5`}>
      <Container fluid className="border-top pt-3">
        <Row>
          <Col>
            <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start">
              <img src={logo} alt="AeroBeach" style={{height: '2.4rem', width: '3.5rem'}}/>
              <p className="m-0 px-md-3 py-2 text-light">© 2025 AltSoft. Todos os direitos reservados.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
