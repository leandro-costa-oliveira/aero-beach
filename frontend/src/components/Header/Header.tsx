import logo from "../../assets/img/aero-logo.png";
import { Nav, Navbar } from "react-bootstrap";
import styles from "./Header.module.css";

export function Header() {
  return (
    <Navbar expand="md" className="bg-dark navbar-dark container-fluid px-2">
      <Navbar.Brand href="#home" className={styles.logomarca}>
        <img src={logo} className={styles.img} />
        AeroBeach
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
          <Nav.Link href="#home" className="">
            Home
          </Nav.Link>
          <Nav.Link href="#torneios" className="">
            Torneios
          </Nav.Link>
          <Nav.Link href="#rankings" className="">
            Rankings
          </Nav.Link>
          <Nav.Link href="#sobre" className="">
            Sobre
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
