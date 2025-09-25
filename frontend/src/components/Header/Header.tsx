import logo from "../../assets/img/aero-logo.png";
import { Nav, Navbar } from "react-bootstrap";
import "../../index.css"

export function Header() {
  return (
    <Navbar expand="sm" className="bg-dark navbar-dark container-fluid px-2 mb-3">
      <Navbar.Brand href="#inicio" style={{ backgroundColor: '#343b41' }} className="gap-1 px-4 rounded-5 d-flex">
        <img src={logo} height="30" />
        AeroBeach
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#inicio" className="lightLink">
            Inicio
          </Nav.Link>
          <Nav.Link href="#torneios" className="lightLink">
            Torneios
          </Nav.Link>
          <Nav.Link href="#rankings" className="lightLink">
            Rankings
          </Nav.Link>
          <Nav.Link href="#sobre" className="lightLink">
            Sobre
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
