import { createContext } from "react";

export const AuthContext = createContext<{
  accessToken: string | null;
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
}>({
  accessToken: null,
  setAccessToken: () => {},
});