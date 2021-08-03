import "./Cart.css";
import Button from '../Button/Button';
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseProductQuantity, decreaseProductQuantity } from "../../reduxxx/Actions";

function CartItem({ index, cartItem }) {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.auth.currentUser) || {};

  const deleteFromCart = (item) => {
    dispatch(removeFromCart({ userEmail: currentUser.email, productId: item.id }));
  }

  return (
    <div key={index} className="cartProductContainer">
      <div className="leftPane">
        <div className="imageContainer">
          <img src={"https://" + cartItem.imageUrl} alt={cartItem.name} />
        </div>
        <div className="quantityBtns">
          <Button
            click={
              cartItem.quantity <= 1
                ? () => { }
                : () => { dispatch(decreaseProductQuantity({ userEmail: currentUser.email, itemId: cartItem.id })) }
            }
            params={[index]}
            className={`quantityControl decrease ${cartItem.quantity <= 1 ? "greyedOut" : null}`}
          >
            -
          </Button>
          <Button className="quantity" click={() => { }}>{cartItem.quantity}</Button>
          <Button
            click={() => {
              dispatch(increaseProductQuantity({ userEmail: currentUser.email, itemId: cartItem.id }))
            }}
            params={[index]}
            className="quantityControl increase"
          >
            +
          </Button>
        </div>
      </div>
      <div className="rightPane">
        <div className="productTitle">
          <p className="productName">{cartItem.name}</p>
          <p className="productBrandName">{cartItem.brandName}</p>
        </div>
        <p className="productPrice">
          {"$" + (cartItem.price * cartItem.quantity).toFixed(2)}
        </p>
        <p
          onClick={(e) => deleteFromCart(cartItem, e)}
          className="removeProduct"
        >
          REMOVE
        </p>
      </div>
    </div>
  );
}

export default CartItem;
