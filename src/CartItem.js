import "./Cart.css";
function CartItem({index,cartItem,deleteFromCart,decreaseQuantity,increaseQuantity}){
    return (
        <div key={index} className="cartProductContainer">
            <div className="leftPane">
                <div className="imageContainer">
                    <img src={"https://"+cartItem.imageUrl} alt={cartItem.name} />
                </div>
                <div className="quantityBtns">
                    <button 
                    id={index}
                    onClick={cartItem.quantity<=1 ? null :(e)=>decreaseQuantity(index,e)}
                    className="quantityControl decrease greyedOut">-</button>
                    <button className="quantity">{cartItem.quantity}</button>
                    <button 
                    onClick={(e)=>increaseQuantity(index,e)}
                    className="quantityControl increase">+</button>
                </div>
            </div>
            <div className="rightPane">
                <div className="productTitle">
                    <p className="productName">{cartItem.name}</p>
                    <p className="productBrandName">{cartItem.brandName}</p>
                </div>
                <p className="productPrice">{"$"+(cartItem.price*cartItem.quantity)}</p>
                <p onClick={(e)=>deleteFromCart(cartItem,e)} className="removeProduct">REMOVE</p>
            </div>
        </div>
    )
}

export default CartItem;