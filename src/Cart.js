import "./Cart.css";
import CartItem from './CartItem';
import {useState} from 'react';
import {withRouter} from 'react-router-dom';
function Cart(props){
    if(localStorage.currentUser===undefined || localStorage.currentUser===""){
        props.history.push('/');
    }

    let initialTempCartItems=JSON.parse(localStorage.carts)[JSON.parse(localStorage.currentUser).email] || {};
    const [cartItems,setCartItems]=useState(initialTempCartItems);
    const [grandTotal,setGrandTotal]=useState(findGrandTotal(initialTempCartItems));

    function deleteFromCart(product,event=null){
        let tempCarts=JSON.parse(localStorage.carts); //Whole Information
        let tempCartItems=tempCarts[props.currentUser.email];  //Current User's Cart
        let filteredCartItems=tempCartItems.filter((cartItem)=>cartItem.id!==product.id);
        tempCarts[props.currentUser.email]=filteredCartItems;
        localStorage.setItem("carts",JSON.stringify(tempCarts));
        setCartItems(filteredCartItems);
        setGrandTotal(findGrandTotal(filteredCartItems));
    }

    function findGrandTotal(cartItems){
        let sum=0;
        cartItems.forEach((item)=>{
            sum+=item.quantity*item.price;
        });
        return sum;
    }
    

    const decreaseQuantity=(cartItemIndex,e=null)=>{
        let tempCartItems=JSON.parse(JSON.stringify(cartItems));
        tempCartItems[cartItemIndex].quantity-=1;
        if(tempCartItems[cartItemIndex].quantity===1) {
            document.getElementById(cartItemIndex.toString()).classList.add("greyedOut");    
        }
        let tempCarts=JSON.parse(localStorage.carts);
        tempCarts[props.currentUser.email]=tempCartItems;
        localStorage.setItem("carts",JSON.stringify(tempCarts));
        setCartItems(tempCartItems);
        setGrandTotal(findGrandTotal(tempCartItems));
    }


    const increaseQuantity=(cartItemIndex,e=null)=>{
        document.getElementById(cartItemIndex.toString()).classList.remove("greyedOut");
        let tempCartItems=JSON.parse(JSON.stringify(cartItems));
        tempCartItems[cartItemIndex].quantity+=1;
        let tempCarts=JSON.parse(localStorage.carts);
        tempCarts[props.currentUser.email]=tempCartItems;
        localStorage.setItem("carts",JSON.stringify(tempCarts));
        setCartItems(tempCartItems);
        setGrandTotal(findGrandTotal(tempCartItems));
    }
    return (
        <div className="cartItemsContainer">
            {cartItems.map((cartItem,index)=><li key={index}><CartItem 
                index={index}
                deleteFromCart={deleteFromCart}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                cartItem={cartItem} /></li>
            )}
            {cartItems.length ? <div className="cartSummary">
                <div>Number of Products: <span>{cartItems.length}</span></div>
                <div>Grand Total: {"$"+grandTotal}</div>
            </div> : null}
        </div>
    )
}

export default withRouter(Cart);