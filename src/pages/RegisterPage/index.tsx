// import { Login } from "../../components/Login";
// import { HomeContainer } from "./style";
import shoppingbag from "../../assets/shopping-bag.png";

import {
  ContainerRegister,
  MainContainerRegisterPage,
  MessageCard,
  TitleContainer,
} from "./style";

const RegisterPage = () => {
  return (
    <>
      <MainContainerRegisterPage>
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
              <span>melhores</span> ingredientes.
            </p>
          </MessageCard>
        </TitleContainer>
        <ContainerRegister>
          <h3>Cadastro</h3>
          <p>Retornar para o login</p>
          <input placeholder="Nome" />
          <input placeholder="Email" />
          <input placeholder="Senha" />
          <input placeholder="Confirmar Senha" />
          <button>Cadastrar</button>
        </ContainerRegister>
      </MainContainerRegisterPage>
    </>
  );
};

export default RegisterPage;
