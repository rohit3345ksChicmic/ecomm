import "./Cart.css";
import Button from '../Button/Button';
import { CartContextConsumer } from "../../Contexts/CartContext";
function CartItem({ index, cartItem }) {
  return (
    <CartContextConsumer>
      {({ increaseQuantity, decreaseQuantity, deleteFromCart }) => {
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
                      ? ()=>{}
                      :  decreaseQuantity
                  }
                  params={[index]}
                  class={`quantityControl decrease ${cartItem.quantity<=1 ? "greyedOut" : null}`}
                >
                  -
                </Button>
                <Button class="quantity">{cartItem.quantity}</Button>
                <Button
                  click={increaseQuantity}
                  params={[index]}
                  class="quantityControl increase"
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
                {"$" + cartItem.price * cartItem.quantity}
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
      }}
    </CartContextConsumer>
  );
}

export default CartItem;
