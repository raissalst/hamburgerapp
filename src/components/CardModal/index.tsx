// import Button from "../Button";
// import { useState } from "react";

import {
  CardItemChosen,
  CardModalContainer,
  CartInformation,
  GreenTopBar,
  TotalCartInfo,
} from "./style";
import { Link } from "react-router-dom";
import hamburger from "../../assets/hamburger.png";
import { FaTrash } from "react-icons/fa";
// import { MenuItemFormat } from "../../interfaces/interfaces";

// interface CardProps {
//   item: MenuItemFormat;
// }

export const CardModal = () => {
  //   const { name, section, price, img } = item;

  return (
    <CardModalContainer>
      <GreenTopBar>
        <h2>Carrinho de compras</h2>
      </GreenTopBar>
      <CartInformation>
        {/* <h4>Sua sacola está vazia</h4>
        <Link to="/">
          <h6>Adicione itens</h6>
        </Link> */}
        <CardItemChosen>
          <div className="containerItemImage">
            <img src={hamburger} alt="hamb" />
          </div>

          <div className="containerDescriptionItem">
            <h3>Hamburguer</h3>
            <FaTrash />
            <div className="quantityContainer">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </div>
        </CardItemChosen>
        <CardItemChosen>
          <div className="containerItemImage">
            <img src={hamburger} alt="hamb" />
          </div>

          <div className="containerDescriptionItem">
            <h3>Hamburguer</h3>
            <FaTrash />
            <div className="quantityContainer">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </div>
        </CardItemChosen>
        <TotalCartInfo>
          <p className="total">Total</p>
          <p className="totalNumber">R$ 14.00</p>
        </TotalCartInfo>
        <button>Remover Todos</button>
      </CartInformation>
    </CardModalContainer>
  );
};
