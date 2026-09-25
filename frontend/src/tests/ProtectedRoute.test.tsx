// @vitest-environment jsdom

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute";

describe("ProtectedRoute", () => {
  it("renderiza o conteúdo quando o usuário está autenticado", () => {
    render(
      <AuthContext.Provider
        value={{
          accessToken: "token-teste",
          setAccessToken: () => {},
        }}
      >
        <MemoryRouter initialEntries={["/perfil"]}>
          <Routes>
            <Route
              path="/perfil"
              element={
                <ProtectedRoute>
                  <div>Página protegida</div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Página protegida")).toBeTruthy();
  });

  it("redireciona para o login quando o usuário não está autenticado", () => {
    render(
      <AuthContext.Provider
        value={{
          accessToken: null,
          setAccessToken: () => {},
        }}
      >
        <MemoryRouter initialEntries={["/perfil"]}>
          <Routes>
            <Route
              path="/perfil"
              element={
                <ProtectedRoute>
                  <div>Página protegida</div>
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<div>Página de Login</div>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Página de Login")).toBeTruthy();
  });
});