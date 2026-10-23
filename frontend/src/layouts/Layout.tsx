import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1">
        <Container className="py-4">
          <Breadcrumbs />
          <Outlet />
        </Container>
      </main>

      <Footer />
    </div>
  );
}