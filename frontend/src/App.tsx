import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Navigate, Route, Routes, } from "react-router-dom";
import { queryClient } from "./api/queryClient";
import { AuthProvider } from "./Context/AuthContext";
import { Layout } from "./layouts/Layout";
import { Cadastro } from "./pages/Cadastro";
import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Ranking } from "./pages/Ranking";
import { TorneioDetalhesPage } from "./pages/TorneioDetalhesPage";
import { TorneiosPage } from "./pages/TorneiosPage";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
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
              <Route
                path="/rankings"
                element={<Navigate to="/ranking" replace />}
              />

              <Route path="/perfil" element={ 
              <ProtectedRoute>
              <Profile />
              </ProtectedRoute>
              }
              />
              <Route
                path="/profile"
                element={<Navigate to="/perfil" replace />}
              />

              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}