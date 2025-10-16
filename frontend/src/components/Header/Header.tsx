import logo from "../../assets/img/aero-logo.png";
import { Nav, Navbar } from "react-bootstrap";
import styles from "./Header.module.css";
import index from "../../index.module.css";
import { Link } from "react-router";

export function Header() {
  return (
    <Navbar expand="sm" className="bg-dark navbar-dark container-fluid px-2">
      <Navbar.Brand
        href="#inicio"
        className={`${styles.logoContainer} gap-1 px-4 rounded-5 d-flex`}
      >
        <img src={logo} className={styles.img} />
        AeroBeach
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-grow-1">
          <Nav.Link href="#inicio" className={index.lightLink}>
            Inicio
          </Nav.Link>
          <Nav.Link href="#torneios" className={index.lightLink}>
            Torneios
          </Nav.Link>
          <Nav.Link href="#rankings" className={index.lightLink}>
            Rankings
          </Nav.Link>
          <Nav.Link href="#sobre" className={index.lightLink}>
            Sobre
          </Nav.Link>
          <Nav.Link as={Link} to="/login" className="ms-sm-auto">
            Login
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
