import { useState,useEffect } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { withRouter } from "react-router-dom";
import { useSelector } from 'react-redux';

function Cart(props) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  if (!isLoggedIn) {
    props.history.push("/");
  }
  // const [cartGrandTotal, setCartGrandTotal] = useState(0);
  const cart = useSelector(state => state.cart.cart);
  const currentUser = useSelector(state => state.auth.currentUser);
  const [cartItems, setCartItems] = useState(cart?.[currentUser.email] ?? []);
  
  const findGrandTotal = () => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += item.quantity * item.price;
    });
    sum = sum.toFixed(2);
    return sum;
  }
  
  useEffect(() => {
    setCartItems(cart?.[currentUser.email] ?? []);
  }, [cart]);

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
                <div>Grand Total: {"$" + findGrandTotal()}</div>
              </div>
            ) : (
              <div className="cartSummary">
                <div>No Items in the Cart</div>
              </div>
            )}
          </div>
        );
}

export default withRouter(Cart);
