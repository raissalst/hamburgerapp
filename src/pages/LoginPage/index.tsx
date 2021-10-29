// import { Login } from "../../components/Login";
// import { HomeContainer } from "./style";

import {
  ContainerLogin,
  MainContainerLoginPage,
  TitleContainer,
} from "./style";

const LoginPage = () => {
  return (
    <>
      <MainContainerLoginPage>
        <TitleContainer />
        <ContainerLogin>
          <h3>Login</h3>
          <input placeholder="Nome" />
          <input placeholder="Senha" />
          <button className="logar">Logar</button>
          <p>
            Crie sua conta para saborear muitas delícias e matar a sua fome!
          </p>
          <button className="cadastrar">Cadastrar</button>
        </ContainerLogin>
      </MainContainerLoginPage>
    </>
  );
};

export default LoginPage;
