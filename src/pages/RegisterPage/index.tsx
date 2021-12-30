import shoppingbag from "../../assets/shopping-bag.png";

import {
  ContainerRegister,
  MainContainerRegisterPage,
  MessageCard,
  TitleContainer,
} from "./style";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import { UserRegisterFormat } from "../../interfaces/interfaces";
import { useRegister } from "../../providers/register";

const RegisterPage = () => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .max(50, "Required field. Maximum of 50 digits.")
      .required("Required field"),
    email: yup.string().required("Required field").email("Invalid e-mail"),
    password: yup
      .string()
      .min(6, "Required field. Minimum of 6 digits.")
      .required("Required field. Password must have at least 6 characters."),
    password_confirm: yup
      .string()
      .oneOf([yup.ref("password")], "Different passwords")
      .required("Required field"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterFormat>({ resolver: yupResolver(formSchema) });

  const { handleRegister } = useRegister();

  const sendToRegisterHandling = (data: UserRegisterFormat) => {
    // console.log(data);
    handleRegister(data, history);
  };

  return (
    <>
      <MainContainerRegisterPage>
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
        <ContainerRegister onSubmit={handleSubmit(sendToRegisterHandling)}>
          <h3>Register</h3>
          <Link className="linkToLogin" to="/login">
            <p>Return to login</p>
          </Link>

          <input placeholder="Name" {...register("name")} />
          {errors.name?.message}
          <input placeholder="Email" {...register("email")} />
          {errors.email?.message}
          <input
            placeholder="Password"
            type="password"
            {...register("password")}
          />
          {errors.password?.message}
          <input
            placeholder="Cofnfirm your password"
            type="password"
            {...register("password_confirm")}
          />
          {errors.password_confirm?.message}
          <button type="submit">Register</button>
        </ContainerRegister>
      </MainContainerRegisterPage>
    </>
  );
};

export default RegisterPage;
