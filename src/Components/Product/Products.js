import React from "react";
import Product from "./Product";
import "../App/App.css";
import {useSelector} from 'react-redux';
import { ProductContextConsumer } from "../../Contexts/ProductContext";
function Products() {
    const productsSelector=(state)=>state.product.products;
    const products=useSelector(productsSelector);
    return (
      <ProductContextConsumer>
        {({  productClick }) => {
          return (
            <ul className="productsList">
              {products.map((product, index) => (
                <li name={product.id} key={index}>
                  <Product
                    id={product.id}
                    name={product.name}
                    price={product.value}
                    imageUrl={product.imageUrl}
                  />
                </li>
              ))}
            </ul>
          );
        }}
      </ProductContextConsumer>
    );
}

export default Products;


//onClick={(e) => productClick(product.id, e)}