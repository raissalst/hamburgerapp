// import Button from "../Button";
// import { useState } from "react";
import { ItemLiContainer } from "./style";
// import Box from "@material-ui/core/Box";
// import {
//   Modal,
//   Radio,
//   Typography,
//   RadioGroup,
//   FormControlLabel,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";
// import { GiClick, GiLovers, GiPartyPopper } from "react-icons/gi";
// import { FaGraduationCap } from "react-icons/fa";
// import hamburger from "../../assets/hamburger.png";
import { MenuItemFormat } from "../../interfaces/interfaces";
import { useAuth } from "../../providers/auth";
import { useCart } from "../../providers/cart";

interface CardProps {
  item: MenuItemFormat;
}

export const Card = ({ item }: CardProps) => {
  const { name, section, price, img } = item;
  // const { userId } = useAuth();
  const { handleAddToCart } = useCart();

  const handleAdd = (item: MenuItemFormat) => {
    handleAddToCart(item);
  };

  return (
    <ItemLiContainer>
      <div>
        <img src={img} alt={name} />
      </div>
      <h3>{name}</h3>
      <h5>{section}</h5>
      <p>R$ {price.toFixed(2)}</p>

      <button onClick={() => handleAdd(item)}>Adicionar</button>
    </ItemLiContainer>
  );
};
