import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { UserLoginFormat } from "../interfaces/interfaces";

//tipa a props
interface AuthProviderProps {
  children: ReactNode;
}

//tipa o que vai ser exportado pelo context
interface AuthProviderData {
  authToken: string;
  Logout: (history: any) => void;
  signIn: (userData: UserLoginFormat, history: any) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const history = useHistory();

  // Dessa forma adicionamos ao state o token caso ele exista no localStorage
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  // Função para logar na aplicação, recebe os dados pegos do form de login
  const signIn = (userData: UserLoginFormat, history: any) => {
    axios
      .post("https://apihamburgueria-raissalst.herokuapp.com/login", userData)
      .then((response) => {
        // setamos no localStorage o token, caso tenhamos a resposta esperada
        localStorage.setItem("token", response.data.accessToken);
        // setamos no state o token, caso tenhamos a resposta esperada
        setAuthToken(response.data.accessToken);
        // redirecionamos para a página logado
        history.push("/");
        // <Redirect to="/dashboard" />;
      })
      .catch((err) => console.log(err.response.data));
  };

  // Função para deslogar da aplicação
  const Logout = (history: any) => {
    // limpando o localStorage
    localStorage.clear();
    // limpando o state
    setAuthToken("");
    // redirecionando para login
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ authToken, Logout, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
