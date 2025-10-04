import logo from "../../assets/img/aero-logo.png";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../index.css";
import { Avatar } from "../Avatar/Avatar";
import menu from "../../assets/img/menu.png";

export function Header() {
  return (
    <Navbar
      expand="sm"
      className="bg-dark navbar-dark container-fluid px-4 mb-3"
    >
      <Link to={"/"} className="text-decoration-none d-block d-sm-none">
        <Navbar.Brand
          style={{ backgroundColor: "#343b41" }}
          className="gap-1 px-4 rounded-5 d-flex"
        >
          <img src={logo} height="30" />
        </Navbar.Brand>
      </Link>
      <Link to={"/"} className="text-decoration-none d-none d-sm-block">
        <Navbar.Brand
          style={{ backgroundColor: "#343b41" }}
          className="gap-1 px-4 rounded-5 d-flex"
        >
          <img src={logo} height="30" />
          AeroBeach
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="d-flex gap-3 d-sm-none"
      >
        <img src={menu} height={36} />
        <Link to={"/Profile"}>
          <Avatar />
        </Link>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="gap-3">
          <Link to={"/"} className="lightLink align-content-center">
            Inicio
          </Link>
          <Link to={"/"} className="lightLink align-content-center">
            Torneios
          </Link>
          <Link to={"/"} className="lightLink align-content-center">
            Rankings
          </Link>
          <Link to={"/"} className="lightLink align-content-center">
            Sobre
          </Link>
        </Nav>
      </Navbar.Collapse>
      <Link to={"/Profile"}>
        <Avatar className="d-none d-sm-block" />
      </Link>
    </Navbar>
  );
}
