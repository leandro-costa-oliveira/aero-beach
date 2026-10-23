import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
  type ReactNode,
} from "react";
import { jwtDecode } from "jwt-decode";
import { apiClient } from "../api/api-client";

interface AuthContextType {
  accessToken: string | null;
  setAccessToken: Dispatch<SetStateAction<string | null>>;
  userId: string | null;
  setUserId: Dispatch<SetStateAction<string | null>>;
  username: string | null;
  setUsername: Dispatch<SetStateAction<string | null>>;
  role: "user" | "player" | "admin" | null;
  setRole: Dispatch<SetStateAction<"user" | "player" | "admin" | null>>;
}

interface TokenPayload {
  userId: string;
  username: string;
  role: "user" | "player" | "admin";
}

export const AuthContext = createContext<AuthContextType>({
  accessToken: null,
  setAccessToken: () => {},
  userId: null,
  setUserId: () => {},
  username: null,
  setUsername: () => {},
  role: null,
  setRole: () => {},
});

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

  const [userId, setUserId] = useState<string | null>(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      return null;
    }

    try {
      return jwtDecode<TokenPayload>(token).userId;
    } catch {
      return null;
    }
  });

  const [username, setUsername] = useState<string | null>(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      return null;
    }

    try {
      return jwtDecode<TokenPayload>(token).username;
    } catch {
      return null;
    }
  });

  const [role, setRole] = useState<"user" | "player" | "admin" | null>(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      return null;
    }

    try {
      return jwtDecode<TokenPayload>(token).role;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("token", accessToken);
      apiClient.defaults.headers.common["Authorization"] = accessToken;

      try {
        const decoded = jwtDecode<TokenPayload>(accessToken);

        setUserId(decoded.userId);
        setUsername(decoded.username);
        setRole(decoded.role);
      } catch {
        setUserId(null);
        setUsername(null);
        setRole(null);
      }
    } else {
      localStorage.removeItem("token");
      delete apiClient.defaults.headers.common["Authorization"];

      setUserId(null);
      setUsername(null);
      setRole(null);
    }
  }, [accessToken]);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        userId,
        setUserId,
        username,
        setUsername,
        role,
        setRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};