import { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";
import { useAuth } from "./auth";
import { GetCartFormat, MenuItemFormat } from "../interfaces/interfaces";
import { useEffect } from "react";
import toast from "react-hot-toast";

//tipa a props
interface CartProviderProps {
  children: ReactNode;
}

//tipa o que vai ser exportado pelo context
interface CartProviderData {
  cart: GetCartFormat[];
  handleAddToCart: (data: MenuItemFormat) => void;
  handleQuantitiesItemInCart: (
    id: number,
    quantity: number,
    subtract: boolean
  ) => void;
  deleteItemInCart: (id: number) => void;
  deleteAllItemsInCart: () => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
  //   const history = useHistory();

  const { userId, authToken } = useAuth();
  const [cart, setCart] = useState<GetCartFormat[]>([] as GetCartFormat[]);

  console.log("user id no card", userId);
  //get cart from user id
  useEffect(() => {
    // authToken &&
    axios
      .get(`https://hamburgerapprlst.herokuapp.com/cart?userId=${userId}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((response) => setCart(response.data))
      .catch((e) => console.log(e));
  }, [userId, cart]);

  console.log("cart no provider cart", cart);

  const notifyAlreadyAdded = () =>
    toast(
      <>
        Produto já está no carrinho! Para alterar quantidade, altere no
        carrinho!
      </>,
      {
        icon: "🛑",
        id: "1",
        style: {
          backgroundColor: "var(--feedback-palette-warning)",
        },
      }
    );

  const errorUnlogged = () => {
    toast.error("Faça o login para adicionar itens ao carrinho");
  };

  const successAddedToCart = () => {
    toast.success("Produto adicionado ao carrinho!");
  };

  //cadastrando no carrinho addToCart
  const handleAddToCart = (data: MenuItemFormat) => {
    const { name, price } = data;
    const isItemAlreadyAdded = cart.some((item) => item.name === name);

    if (cart.length === 0 || isItemAlreadyAdded === false) {
      return axios
        .post(
          `https://hamburgerapprlst.herokuapp.com/cart`,
          {
            name: name,
            price: price,
            quantity: 1,
            userId: userId,
          },
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        )
        .then((response) => {
          successAddedToCart();
        })
        .catch((e) => errorUnlogged());
    } else {
      notifyAlreadyAdded();
    }
  };

  //alterar quantidades no carrinho
  const handleQuantitiesItemInCart = (
    id: number,
    quantity: number,
    subtract: boolean
  ) => {
    let newQuantity = 0;
    if (subtract === true) {
      newQuantity = quantity - 1;
    } else {
      newQuantity = quantity + 1;
    }

    if (newQuantity === 0) {
      return deleteItemInCart(id);
    } else {
      return axios
        .patch(
          `https://hamburgerapprlst.herokuapp.com/cart/${id}`,
          {
            quantity: newQuantity,
            userId: userId,
          },
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => console.log(e.response.data.message));
    }
  };

  //deletando 1 item do carrinho
  const deleteItemInCart = (id: number) => {
    axios
      .delete(`https://hamburgerapprlst.herokuapp.com/cart/${id}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => console.log(e.response.data.message));
  };

  //deletando todos os itens do carrinho
  const deleteAllItemsInCart = () => {
    cart.map((item) => deleteItemInCart(item.id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddToCart,
        handleQuantitiesItemInCart,
        deleteItemInCart,
        deleteAllItemsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
