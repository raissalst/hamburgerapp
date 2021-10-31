// import { Login } from "../../components/Login";
// import { HomeContainer } from "./style";
import shoppingbag from "../../assets/shopping-bag.png";
import { useHistory } from "react-router";

import {
  ContainerLogin,
  MainContainerLoginPage,
  MessageCard,
  TitleContainer,
} from "./style";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();

  const sendTo = (path: string) => {
    history.push(path);
  };
  return (
    <>
      <MainContainerLoginPage>
        <TitleContainer>
          <Link to="/">
            <h1>
              Burguer <span>Kenzie</span>
            </h1>
          </Link>
          <MessageCard>
            <div>
              <img src={shoppingbag} alt="bag" />
            </div>
            <p>
              A vida é como um sanduíche, é preciso recheá-la com os{" "}
              <span>melhores</span> ingredientes.
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
          <button className="cadastrar" onClick={() => sendTo("/register")}>
            Cadastrar
          </button>
        </ContainerLogin>
      </MainContainerLoginPage>
    </>
  );
};

export default LoginPage;
