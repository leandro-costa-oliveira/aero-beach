import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100 w-100">
      <Header />

      <Container className="my-4">
        <Outlet />
      </Container>

      <Footer />
    </div>
  );
}
