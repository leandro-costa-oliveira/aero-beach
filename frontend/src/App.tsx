import { QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { queryClient } from "./api/queryClient";
import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/HomePage";
import { TorneiosPage } from "./pages/TorneiosPage.tsx";
import { Login } from "./pages/Login";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/torneios" element={<TorneiosPage />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}
