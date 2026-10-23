// @vitest-environment jsdom

import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "../Context/AuthContext";

function TestComponent() {
  const { accessToken } = useContext(AuthContext);

  return <span>{accessToken ?? "sem-token"}</span>;
}

describe("AuthProvider", () => {
  beforeEach(() => {
    cleanup();
    localStorage.clear();
  });

  it("recupera o token salvo no localStorage", () => {
    localStorage.setItem("token", "token-teste");

    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    expect(screen.getByText("token-teste")).toBeTruthy();
  });

  it("inicia sem token quando não existe sessão", () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    expect(screen.getByText("sem-token")).toBeTruthy();
  });
});