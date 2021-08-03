import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SearchResults from "../Search/searchResults";
import Button from '../Button/Button';
import { logOut } from "../../reduxxx/Actions";

export default function Navbar({ changeModalView }) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products) || [];
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const currentUser = useSelector(state => state.auth.currentUser) || {};
  const [searchWord, setSearchWord] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [productsInCart, setProductsInCart] = useState(0);
  const cart = useSelector(state => state.cart.cart);
  let cartItems = cart.hasOwnProperty(currentUser.email) ? cart[currentUser.email] : [];

  useEffect(() => {
    setProductsInCart(cartItems.length);
  }, [cartItems.length]);

  useEffect(() => {
    if (searchWord.length) {
      setSearchResults(products.filter(product => {
        let productNameArr = [product.name.toLowerCase(), ...product.name.toLowerCase().split(" ")];
        return productNameArr.includes(searchWord) || productNameArr.some(val => val.startsWith(searchWord))
      }));
    }
    else {
      setSearchResults([]);
    }
  }, [searchWord]);

  const handleLogOut = () => {
    dispatch(logOut());
  }
  return (
    <header className="navbar">
      <Link to="/">
        <div className="logo">
          <img src="/flipkart-logo.png" alt="Flipkart" />
        </div>
      </Link>
      <div className="searchContainer">
        <div className="searchBarContainer">
          <input
            type="text"
            value={searchWord}
            placeholder="Search Products..."
            className="searchBar"
            onChange={(e) => {
              setSearchWord(e.target.value.toLowerCase())
            }}
          />
        </div>
        {searchResults.length ? <SearchResults resetSearch={() => { setSearchWord(""); }} results={searchResults} /> : null}
      </div>
      <div className="userContainer">
        {/* Login / UserName */}
        {isLoggedIn ? ( //isLoggedIn
          <div className="loggedin">
            <span>{currentUser.hasOwnProperty("userName") ? currentUser.userName : null}</span>
            {/* currentuser.username */}
            <Button className="btn-small" click={handleLogOut}>
              Logout
            </Button>
                  <div className="cart">
                    <a href="/cart">
                      {productsInCart ? <div className="cartBadge">{productsInCart}</div> : null}
                      <img
                        src="/shopping-cart-solid.svg"
                        alt="Shopping Cart"
                        width="20"
                        height="20"
                      />
                      Cart
                    </a>
                  </div>
          </div>
        ) : (
          <Button className="btn-small" click={changeModalView}>
            Login
          </Button>
        )}
      </div>
    </header>
  );
}
