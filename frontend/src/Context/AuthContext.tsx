import { createContext, useEffect, useState, type Dispatch, type SetStateAction, type ReactNode, } from "react";
import { apiClient } from "../api/api-client";

interface AuthContextType {
  accessToken: string | null;
  setAccessToken: Dispatch<SetStateAction<string | null>>;
  role: "user" | "player" | "admin" | null;
  setRole: Dispatch<SetStateAction<"user" | "player" | "admin" | null>>;
}

export const AuthContext = createContext<AuthContextType>({
  accessToken: null,
  setAccessToken: () => {},
  role: null,
  setRole: () => {},
});;

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [accessToken, setAccessToken] = useState<string | null>(() => {
    const token = localStorage.getItem("token");

    if (token) {
      apiClient.defaults.headers.common["Authorization"] = token;
    }

    return token;
  });

  const [role, setRole] = useState<"user" | "player" | "admin" | null>(null)

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("token", accessToken);
      apiClient.defaults.headers.common["Authorization"] = accessToken;
    } else {
      localStorage.removeItem("token");
      delete apiClient.defaults.headers.common["Authorization"];
    }
  }, [accessToken]);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        role,
        setRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};