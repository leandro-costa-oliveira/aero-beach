import logo from "../../assets/img/aero-logo.png";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
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
        <Nav className="gap-3">
          <Link to={'/'} className="lightLink align-content-center">Inicio</Link>
          <Link to={'/'} className="lightLink align-content-center">Torneios</Link>
          <Link to={'/'} className="lightLink align-content-center">Rankings</Link>
          <Link to={'/'} className="lightLink align-content-center">Sobre</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
