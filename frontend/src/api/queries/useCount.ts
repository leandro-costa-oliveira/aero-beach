import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../QueryKeys";
import { apiClient } from "../api-client";

export function useCount() {
  return useQuery({
    queryKey: QueryKeys.counter,
    queryFn: () => apiClient.get<{ count: number }>("/counter").then((res) => res.data),
  });
}
