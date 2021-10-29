import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const RoutesPath = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
    </Switch>
  );
};

export default RoutesPath;
