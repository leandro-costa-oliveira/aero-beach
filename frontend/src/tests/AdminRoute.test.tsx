// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { AdminRoute } from "../components/AdminRoutes/AdminRoute";

describe("AdminRoute", () => {
  it("renderiza o conteúdo quando o usuário é administrador", () => {
    render(
      <AuthContext.Provider
        value={{
          accessToken: "token",
          setAccessToken: () => {},
          userId: "1",
          setUserId: () => {},
          username: "admin",
          setUsername: () => {},
          role: "admin",
          setRole: () => {},
        }}
      >
        <MemoryRouter initialEntries={["/admin"]}>
          <Routes>
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <div>Painel Administrativo</div>
                </AdminRoute>
              }
            />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Painel Administrativo")).toBeInTheDocument();
  });

  it("redireciona para o login quando o usuário não está autenticado", () => {
    render(
      <AuthContext.Provider
        value={{
          accessToken: null,
          setAccessToken: () => {},
          userId: null,
          setUserId: () => {},
          username: null,
          setUsername: () => {},
          role: null,
          setRole: () => {},
        }}
      >
        <MemoryRouter initialEntries={["/admin"]}>
          <Routes>
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <div>Painel Administrativo</div>
                </AdminRoute>
              }
            />
            <Route path="/login" element={<div>Página de Login</div>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Página de Login")).toBeInTheDocument();
  });

  it("redireciona para a home quando o usuário não é administrador", () => {
    render(
      <AuthContext.Provider
        value={{
          accessToken: "token",
          setAccessToken: () => {},
          userId: "1",
          setUserId: () => {},
          username: "player",
          setUsername: () => {},
          role: "player",
          setRole: () => {},
        }}
      >
        <MemoryRouter initialEntries={["/admin"]}>
          <Routes>
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <div>Painel Administrativo</div>
                </AdminRoute>
              }
            />
            <Route path="/" element={<div>Home</div>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});