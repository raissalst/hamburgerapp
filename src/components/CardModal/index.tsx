import {
  CardItemChosen,
  CardModalContainer,
  CartInformation,
  GreenTopBar,
  TotalCartInfo,
} from "./style";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../../providers/cart";
import shoppingbag from "../../assets/shopping-bag.png";
import { useAuth } from "../../providers/auth";

export const CardModal = () => {
  const {
    cart,
    handleQuantitiesItemInCart,
    deleteItemInCart,
    deleteAllItemsInCart,
  } = useCart();

  const { userId } = useAuth();

  return (
    <CardModalContainer>
      <GreenTopBar>
        <h2>Shopping cart</h2>
      </GreenTopBar>
      <CartInformation>
        {cart.length === 0 && (
          <>
            <h4>Your bag is empty</h4>

            <h6>Add items</h6>
          </>
        )}

        {cart.length !== 0 &&
          userId !== "" &&
          cart.map((item) => (
            <CardItemChosen key={item.name}>
              <div className="containerItemImage">
                <img src={shoppingbag} alt="shopbag" />
              </div>

              <div className="containerDescriptionItem">
                <h3>{item.name}</h3>
                <FaTrash onClick={() => deleteItemInCart(item.id)} />
                <div className="quantityContainer">
                  <button
                    onClick={() =>
                      handleQuantitiesItemInCart(item.id, item.quantity, true)
                    }
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() =>
                      handleQuantitiesItemInCart(item.id, item.quantity, false)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </CardItemChosen>
          ))}

        {cart.length !== 0 && (
          <>
            <TotalCartInfo>
              <p className="total">Total</p>
              <p className="totalNumber">
                ${" "}
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </TotalCartInfo>
            <button onClick={() => deleteAllItemsInCart()}>Remove all</button>
          </>
        )}
      </CartInformation>
    </CardModalContainer>
  );
};
