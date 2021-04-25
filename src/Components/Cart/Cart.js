import "./Cart.css";
import CartItem from "./CartItem";
import { withRouter } from "react-router-dom";
import { CartContextConsumer } from "../../Contexts/CartContext";
function Cart(props) {
  if (
    localStorage.currentUser === undefined ||
    localStorage.currentUser === ""
  ) {
    props.history.push("/");
  }
  return (
    <CartContextConsumer>
      {({ cartItems, cartGrandTotal }) => {
        return (
          <div className="cartItemsContainer">
            {cartItems.map((cartItem, index) => (
              <li key={index}>
                <CartItem index={index} cartItem={cartItem} />
              </li>
            ))}
            {cartItems.length!==0 ? (
              <div className="cartSummary">
                <div>
                  Number of Products: <span>{cartItems.length}</span>
                </div>
                <div>Grand Total: {"$" + cartGrandTotal}</div>
              </div>
            ) : (
              <div className="cartSummary">
                <div>No Items in the Cart</div>
              </div>
            )}
          </div>
        );
      }}
    </CartContextConsumer>
  );
}

export default withRouter(Cart);
