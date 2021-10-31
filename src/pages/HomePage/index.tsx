// import { Login } from "../../components/Login";
// import { HomeContainer } from "./style";

import { Card } from "../../components/Card";
import { NavBar } from "../../components/NavBar";
import { ListContainerHome, MainContainerHome } from "./style";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <MainContainerHome>
        <ListContainerHome>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ListContainerHome>
      </MainContainerHome>
    </>
  );
};

export default HomePage;
