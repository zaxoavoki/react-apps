import { createContext } from "react";

export type AuthContextType = {
  user: any;
  token: any;
}

export const initialAuthContext = {
  user: null,
  token: null,
};

export const AuthContext = createContext(initialAuthContext);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  return <>{children}</>;
}
