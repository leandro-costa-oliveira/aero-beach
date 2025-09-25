import { Container } from "react-bootstrap";
import { CardTorneios } from "../components/CardTorneios/CardTorneios";

export function HomePage() {
  return (
    <>
    <Container className="col-12 col-lg-7">
      <CardTorneios id="ex" nome="qwertyqwerty" realizadoEm="12/12/2025" limiteInscricao="12/12/2025" preco={123} federado/>
    </Container>
    </>
  );
}
