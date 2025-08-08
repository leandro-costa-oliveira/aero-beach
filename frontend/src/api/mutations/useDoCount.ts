import { useMutation } from "@tanstack/react-query";
import { QueryKeys } from "../QueryKeys";
import { apiClient } from "../api-client";
import { queryClient } from "../queryClient";

export function useDoCount() {
  return useMutation({
    mutationKey: QueryKeys.counter,
    mutationFn: () =>
      apiClient.post<{ count: number }>("/counter").then((res) => {
        queryClient.invalidateQueries({ queryKey: QueryKeys.counter });
        return res.data;
      }),
  });
}
