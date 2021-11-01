import { AuthProvider } from "./auth";
import { ReactNode } from "react";
import { RegisterProvider } from "./register";
import { CartProvider } from "./cart";

interface ProviderData {
  children: ReactNode;
}

const ProvidersGathered = ({ children }: ProviderData) => {
  return (
    <AuthProvider>
      <RegisterProvider>
        <CartProvider>{children}</CartProvider>
      </RegisterProvider>
    </AuthProvider>
  );
};

export default ProvidersGathered;
