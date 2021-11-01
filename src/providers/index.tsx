import { AuthProvider } from "./auth";
import { ReactNode } from "react";

interface ProviderData {
  children: ReactNode;
}

const ProvidersGathered = ({ children }: ProviderData) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default ProvidersGathered;
