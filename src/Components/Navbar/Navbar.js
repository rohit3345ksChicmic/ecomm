import { UserContextConsumer } from "../../Contexts/UserContext";
import { Link } from "react-router-dom";
import SearchResults from "../Search/searchResults";
import { SearchContextConsumer } from "../../Contexts/SearchContext";
import { CartContextConsumer } from "../../Contexts/CartContext";
import Button from '../Button/Button';
export default function Navbar(props) {
  return (
    <UserContextConsumer>
      {({ currentUser, isLoggedIn, changeModalView, handleLogOut }) => {
        return (
          <header className="navbar">
            <Link to="/">
              <div className="logo">
                <img src="/flipkart-logo.png" alt="Flipkart" />
              </div>
            </Link>
            <SearchContextConsumer>
              {({ searchQuery, searchProducts, searchResults }) => {
                return (
                  <div className="searchContainer">
                    <div className="searchBarContainer">
                      <input
                        type="text"
                        value={searchQuery}
                        placeholder="Search Products..."
                        className="searchBar"
                        onChange={(e) => searchProducts(e)}
                      />
                    </div>
                    {searchResults.length ? <SearchResults /> : null}
                  </div>
                );
              }}
            </SearchContextConsumer>

            <div className="userContainer">
              {/* Login / UserName */}
              {isLoggedIn ? (
                <div className="loggedin">
                  <span>{currentUser.userName}</span>
                  <Button class="btn-small" click={handleLogOut}>
                    Logout
                  </Button>
                  <CartContextConsumer>
                    {({cartItems}) => {
                      return (
                        <div className="cart">
                          <a href="/cart">
                            {cartItems.length ? <div className="cartBadge">{cartItems.length}</div>: null}
                            <img
                              src="/shopping-cart-solid.svg"
                              alt="Shopping Cart"
                              width="20"
                              height="20"
                            />
                            Cart
                          </a>
                        </div>
                      );
                    }}
                  </CartContextConsumer>
                </div>
              ) : (
                <Button class="btn-small" click={changeModalView}>
                  Login
                </Button>
              )}
            </div>
          </header>
        );
      }}
    </UserContextConsumer>
  );
}
