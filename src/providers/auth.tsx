import { createContext, useContext, useState, ReactNode } from "react";
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
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const [userId, setUserId] = useState(
    () => localStorage.getItem("userId") || ""
  );

  const errorUserNotFound = () => {
    toast.error("User not found. Check your data and try again.");
  };

  const signIn = (userData: UserLoginFormat, history: any) => {
    axios
      .post("https://hamburgerapi.onrender.com/login", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("userId", response.data.user.id);

        setAuthToken(response.data.accessToken);
        setUserId(response.data.user.id);

        history.push("/");
      })
      .catch((err) => errorUserNotFound());
  };

  const notifyLogout = () =>
    toast(<span>You have logged out! To access your cart, login again.</span>, {
      icon: "🛑",
      id: "2",
    });

  // Função para deslogar da aplicação
  const Logout = (history: any) => {
    localStorage.clear();

    setAuthToken("");
    setUserId("");

    history.push("/login");
    notifyLogout();
  };

  return (
    <AuthContext.Provider value={{ authToken, userId, Logout, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
