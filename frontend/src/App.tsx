import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { apiClient } from "./api/api-client";
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
import { AdminLayout } from "./layouts/AdminLayout";
import { Admin } from "./pages/Admin";
import { AdminRoute } from "./components/AdminRoutes/AdminRoute";
import { CadastroTorneio } from "./pages/CadastroTorneio";
import { CadastroCategoria, } from "./pages/CadastroCategoria";
import { SetupInicial } from "./pages/SetupInicial";

function AppRoutes() {
  const [setupRequired, setSetupRequired] = useState<boolean | null>(null);
  const [setupCheckFailed, setSetupCheckFailed] = useState(false);

  useEffect(() => {
    apiClient.get<{ required: boolean }>("/auth/setup-status")
      .then(({ data }) => setSetupRequired(data.required))
      .catch(() => { setSetupCheckFailed(true); setSetupRequired(false); });
  }, []);

  if (setupRequired === null) {
    return <div className="py-5 text-center"><Spinner animation="border" role="status" /><span className="visually-hidden">Carregando...</span></div>;
  }

  if (setupCheckFailed) {
    return <div className="container py-5 text-center"><h1 className="h4">Não foi possível conectar ao servidor</h1><p>Recarregue a página quando a API estiver disponível.</p><button className="btn btn-primary" onClick={() => window.location.reload()}>Tentar novamente</button></div>;
  }

  if (setupRequired) return <SetupInicial onCompleted={() => setSetupRequired(false)} />;

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/torneios" element={<TorneiosPage />} />
        <Route path="/torneios/:id" element={<TorneioDetalhesPage />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/rankings" element={<Navigate to="/ranking" replace />} />
        <Route path="/perfil" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/profile" element={<Navigate to="/perfil" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
          <Route index element={<Admin />} />
          <Route path="torneios/cadastro" element={<CadastroTorneio />} />
          <Route path="categorias/cadastro" element={<CadastroCategoria />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}
