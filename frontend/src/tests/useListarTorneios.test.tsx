// @vitest-environment jsdom

import { describe, expect, it, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useListarTorneios } from "../hooks/useListarTorneios";
import { apiClient } from "../api/api-client";

vi.mock("../api/api-client", () => ({
  apiClient: {
    get: vi.fn(),
  },
}));

describe("useListarTorneios", () => {
  it("retorna a resposta paginada", async () => {
    const response = {
      data: {
        data: [],
        total: 10,
        page: 1,
        perPage: 6,
        totalPages: 2,
      },
    };

    vi.mocked(apiClient.get).mockResolvedValueOnce(response);

    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );

    const { result } = renderHook(() => useListarTorneios(), { wrapper });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data).toEqual(response.data);

    expect(apiClient.get).toHaveBeenCalledWith(
      "/torneios/?page=1&perPage=6"
    );
  });
});