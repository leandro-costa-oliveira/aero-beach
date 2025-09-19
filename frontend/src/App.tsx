import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { CardTorneios } from "./components/CardTorneios/CardTorneios";
import { Col, Container, Row } from "react-bootstrap";

export function App() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <CardTorneios />
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
