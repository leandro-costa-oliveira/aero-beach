import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Routes, Route } from "react-router";
import { Login } from "./components/Login/Login";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}
