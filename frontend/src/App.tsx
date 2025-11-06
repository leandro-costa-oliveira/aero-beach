import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { queryClient } from "./api/queryClient";
import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/HomePage";
import { Torneios } from "./pages/Torneios";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { AuthContext } from "./Context/AuthContext";

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
              <Route path="/torneios" element={<Torneios />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </Router>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
}
