import logo from "../../assets/img/aero-logo.png";
import { Nav, Navbar } from "react-bootstrap";
import styles from "./Header.module.css";

export function Header() {
  return (
    <Navbar expand="sm" className="bg-dark navbar-dark container-fluid px-2">
      <Navbar.Brand href="#home" className={`${styles.logoContainer} gap-1 px-4 rounded-5 d-flex`}>
        <img src={logo} className={styles.img} />
        AeroBeach
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#inicio">
            Inicio
          </Nav.Link>
          <Nav.Link href="#torneios">
            Torneios
          </Nav.Link>
          <Nav.Link href="#rankings">
            Rankings
          </Nav.Link>
          <Nav.Link href="#sobre">
            Sobre
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
