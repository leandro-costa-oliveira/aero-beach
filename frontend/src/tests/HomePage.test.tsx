// @vitest-environment jsdom

import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

vi.mock("../hooks/useUltimoTorneio", () => ({
  useUltimoTorneio: () => ({
    data: null,
    isLoading: false,
    error: null,
  }),
}));

vi.mock("../components/RankingResumo/RankingResumo", () => ({
  RankingResumo: () => <div>Ranking Resumo</div>,
}));

vi.mock("../components/CardTorneios/CardTorneios", () => ({
  CardTorneios: () => <div>Card Torneio</div>,
}));

describe("HomePage", () => {
  it("renderiza a navegação pública e informa quando não há torneios", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByText("Bem-vindo ao AeroBeach")).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "Ver torneios" })
    ).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "Ver rankings" })
    ).toBeTruthy();

    expect(
      screen.getByText("Nenhum torneio disponível no momento.")
    ).toBeTruthy();

    expect(screen.getByText("Ranking Resumo")).toBeTruthy();
  });
});