import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { UserContextConsumer } from "../../Contexts/UserContext";
import { Link } from "react-router-dom";
import SearchResults from "../Search/searchResults";
import { SearchContextConsumer } from "../../Contexts/SearchContext";
import { CartContextConsumer } from "../../Contexts/CartContext";
import Button from '../Button/Button';

export default function Navbar(props) {
  const products = useSelector(state => state.product.products) || [];
  const [searchWord, setSearchWord] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
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
        {searchResults.length ? <SearchResults resetSearch={() => { setSearchWord("");}} results={searchResults} /> : null}
            </div>
          </header>
        );
}
