import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { queryClient } from "./api/queryClient";
import { AuthContext } from "./Context/AuthContext";
import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { TorneioDetalhesPage } from "./pages/TorneioDetalhesPage.tsx";
import { TorneiosPage } from "./pages/TorneiosPage.tsx";
import { SubscribePage } from "./pages/SubscribePage.tsx";

export default function App() {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={{ accessToken, setAccessToken }}>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/torneios" element={<TorneiosPage />} />
              <Route path="/torneios/:id" element={<TorneioDetalhesPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/torneios/:id/inscrever/:cateId" element={<SubscribePage />}/>
            </Route>
          </Routes>
        </Router>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
}
