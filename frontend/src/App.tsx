import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { queryClient } from "./api/queryClient";
import { AuthContext } from "./Context/AuthContext";
import { Layout } from "./layouts/Layout";
import { Cadastro } from "./pages/Cadastro";
import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Ranking } from "./pages/Ranking";
import { TorneioDetalhesPage } from "./pages/TorneioDetalhesPage";
import { TorneiosPage } from "./pages/TorneiosPage";

export default function App() {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={{ accessToken, setAccessToken }}>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />

              <Route path="/torneios" element={<TorneiosPage />} />
              <Route
                path="/torneios/:id"
                element={<TorneioDetalhesPage />}
              />

                <Route path="/ranking" element={<Ranking />} />
                <Route path="/rankings" element={<Navigate to="/ranking" replace />} />

                <Route path="/perfil" element={<Profile />} />
                <Route path="/profile" element={<Navigate to="/perfil" replace />} />

              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Route>
          </Routes>
        </Router>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
}