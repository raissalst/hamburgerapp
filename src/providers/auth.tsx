import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { UserLoginFormat } from "../interfaces/interfaces";
import toast from "react-hot-toast";

//tipa a props
interface AuthProviderProps {
  children: ReactNode;
}

//tipa o que vai ser exportado pelo context
interface AuthProviderData {
  authToken: string;
  userId: string;
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

  const [userId, setUserId] = useState(
    () => localStorage.getItem("userId") || ""
  );

  const errorUserNotFound = () => {
    toast.error(
      "Usuário não encontrado. Confira seus dados e tente novamente."
    );
  };
  // Função para logar na aplicação, recebe os dados pegos do form de login
  const signIn = (userData: UserLoginFormat, history: any) => {
    axios
      .post("https://apihamburgueria-raissalst.herokuapp.com/login", userData)
      .then((response) => {
        // setamos no localStorage o token, caso tenhamos a resposta esperada
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("userId", response.data.user.id);
        // setamos no state o token, caso tenhamos a resposta esperada
        setAuthToken(response.data.accessToken);
        setUserId(response.data.user.id);
        // redirecionamos para a página logado
        history.push("/");
        // <Redirect to="/dashboard" />;
      })
      .catch((err) => errorUserNotFound());
  };

  const notifyLogout = () =>
    toast(
      <span>
        Você fez o logout! Para acessar o carrinho, faça seu login novamente.
      </span>,
      {
        icon: "🛑",
        id: "2",
      }
    );

  // Função para deslogar da aplicação
  const Logout = (history: any) => {
    // limpando o localStorage
    localStorage.clear();
    // limpando o state
    setAuthToken("");
    setUserId("");
    // redirecionando para login
    history.push("/login");
    notifyLogout();
  };

  //   console.log("user id no auth", userId);

  return (
    <AuthContext.Provider value={{ authToken, userId, Logout, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
