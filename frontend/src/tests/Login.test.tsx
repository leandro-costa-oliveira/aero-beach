// @vitest-environment jsdom

import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { Login } from "../pages/Login";

vi.mock("../hooks/useEfetuarLogin", () => ({
  useEfetuarLogin: () => ({
    mutateAsync: vi.fn(),
    isPending: false,
    error: null,
  }),
}));

describe("Login", () => {
  it("renderiza a tela de login quando o usuário não está autenticado", () => {
    render(
      <AuthContext.Provider
        value={{
          accessToken: null,
          setAccessToken: () => {},
        }}
      >
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Login")).toBeTruthy();

    expect(
      screen.getByRole("button", { name: "Entrar" })
    ).toBeTruthy();

    expect(
      screen.getByRole("link", { name: "Cadastrar" })
    ).toBeTruthy();

    expect(
      screen.getByPlaceholderText("nome@dominio.tld")
    ).toBeTruthy();
  });

  it("redireciona para o perfil quando o usuário está autenticado", () => {
    render(
      <AuthContext.Provider
        value={{
          accessToken: "token-teste",
          setAccessToken: () => {},
        }}
      >
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={<div>Página de Perfil</div>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Página de Perfil")).toBeTruthy();
  });
});