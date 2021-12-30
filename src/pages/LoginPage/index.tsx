import shoppingbag from "../../assets/shopping-bag.png";
import { useHistory } from "react-router";

import {
  ContainerLogin,
  MainContainerLoginPage,
  MessageCard,
  TitleContainer,
} from "./style";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/auth";
import { UserLoginFormat } from "../../interfaces/interfaces";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginPage = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Required e-mail").email("Invalid e-mail"),
    password: yup.string().required("Required field"),
  });

  const history = useHistory();

  const { signIn } = useAuth();

  const sendTo = (path: string) => {
    history.push(path);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginFormat>({ resolver: yupResolver(formSchema) });

  const handleSubmitLogin = (data: UserLoginFormat) => {
    signIn(data, history);
  };

  return (
    <>
      <MainContainerLoginPage>
        <TitleContainer>
          <Link to="/">
            <h1>
              Burguer <span>Place</span>
            </h1>
          </Link>
          <MessageCard>
            <div>
              <img src={shoppingbag} alt="bag" />
            </div>
            <p>
              Life is like a sandwich, it is better to fill it with the{" "}
              <span>best</span> ingredients.
            </p>
          </MessageCard>
        </TitleContainer>
        <ContainerLogin onSubmit={handleSubmit(handleSubmitLogin)}>
          <h3>Login</h3>
          <input placeholder="Email" {...register("email")} />
          {errors.email?.message}
          <input
            placeholder="Password"
            type="password"
            {...register("password")}
          />
          {errors.password?.message}
          <button type="submit" className="logar">
            Login
          </button>
          <p>
            Create your account to taste lots of delights and satisfy your
            hunger!
          </p>
          <button className="cadastrar" onClick={() => sendTo("/register")}>
            Register
          </button>
        </ContainerLogin>
      </MainContainerLoginPage>
    </>
  );
};

export default LoginPage;
