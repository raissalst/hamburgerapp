// import { Login } from "../../components/Login";
// import { HomeContainer } from "./style";
import shoppingbag from "../../assets/shopping-bag.png";

import {
  ContainerLogin,
  MainContainerLoginPage,
  MessageCard,
  TitleContainer,
} from "./style";

const LoginPage = () => {
  return (
    <>
      <MainContainerLoginPage>
        <TitleContainer>
          <h1>
            Burguer <span>Kenzie</span>
          </h1>
          <MessageCard>
            <div>
              <img src={shoppingbag} alt="bag" />
            </div>
            <p>
              A vida é como um sanduíche, é preciso recheá-la com os{" "}
              <span>melhores</span> igredientes.
            </p>
          </MessageCard>
        </TitleContainer>
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
