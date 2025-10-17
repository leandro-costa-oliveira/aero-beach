import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100 min-vw-100">
      <Header />
      <main className="flex-fill container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}