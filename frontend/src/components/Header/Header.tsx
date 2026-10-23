import { useContext } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "../../index.css";

import { Avatar } from "../Avatar/Avatar";
import menu from "../../assets/img/menu.png";
import logo from "../../assets/img/aero-logo.png";
import { AuthContext } from "../../Context/AuthContext";

export function Header() {
  const { accessToken } = useContext(AuthContext);

  return (
    <Navbar expand="sm" className="bg-dark navbar-dark px-4">
      <Link to="/" className="text-decoration-none d-block d-sm-none">
        <Navbar.Brand
          style={{ backgroundColor: "#343b41" }}
          className="gap-1 px-3 rounded-5 d-flex"
        >
          <img src={logo} height="30" alt="AeroBeach" />
        </Navbar.Brand>
      </Link>
      <Link to="/" className="text-decoration-none d-none d-sm-block">
        <Navbar.Brand
          style={{ backgroundColor: "#343b41" }}
          className="gap-1 px-4 rounded-5 d-flex"
        >
          <img src={logo} height="30" alt="AeroBeach" />
          AeroBeach
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="d-flex gap-3 d-sm-none ms-auto"
      >
        <img src={menu} height={36} alt="Menu" />
        <Link to={accessToken ? "/perfil" : "/login"}>
          <Avatar />
        </Link>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="gap-3">
          <Link to="/" className="lightLink align-content-center">
            Início
          </Link>

          <Link to="/torneios" className="lightLink align-content-center">
            Torneios
          </Link>

          <Link to="/ranking" className="lightLink align-content-center">
            Ranking
          </Link>
        </Nav>
      </Navbar.Collapse>
      {accessToken ? (
        <Link to="/perfil">
          <Avatar className="d-none d-sm-block" />
        </Link>
      ) : (
<div className="d-none d-sm-flex gap-4 ms-auto align-items-center">
  <Link
    to="/login"
    className="lightLink text-decoration-none fs-6 d-flex align-items-center"
  >
    Entrar
  </Link>

  <Link
    to="/cadastro"
    className="btn btn-primary fs-6 px-3 py-1 d-flex align-items-center"
  >
    Cadastrar
  </Link>
</div>
      )}
    </Navbar>
  );
}