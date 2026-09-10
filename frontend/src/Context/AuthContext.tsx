import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
  type ReactNode,
} from "react";

interface AuthContextType {
  accessToken: string | null;
  setAccessToken: Dispatch<SetStateAction<string | null>>;
}

export const AuthContext = createContext<AuthContextType>({
  accessToken: null,
  setAccessToken: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};