import { createContext, useContext, ReactNode } from "react";
import axios from "axios";
import { UserRegisterFormat } from "../interfaces/interfaces";

//tipa a props
interface RegisterProviderProps {
  children: ReactNode;
}

// tipa o que vai ser exportado pelo context
interface RegisterProviderData {
  handleRegister: (userData: UserRegisterFormat, history: any) => void;
}

const RegisterContext = createContext<RegisterProviderData>(
  {} as RegisterProviderData
);

export const RegisterProvider = ({ children }: RegisterProviderProps) => {
  const handleRegister = (userData: UserRegisterFormat, history: any) => {
    const { email, password, name } = userData;
    axios
      .post("https://hamburgerapprlst.herokuapp.com/register", {
        email: email,
        password: password,
        name: name,
      })
      .then((response) => {
        history.push("/login");
      })
      .catch((err) => console.log(err.response.data.message));
  };

  return (
    <RegisterContext.Provider value={{ handleRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
