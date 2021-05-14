import React from "react";
import Product from "./Product";
import "../App/App.css";
import { ProductContextConsumer } from "../../Contexts/ProductContext";
class Products extends React.Component {
  // constructor(props) {
  //     super(props);
  // }

  render() {
    
    return (
      <ProductContextConsumer>
        {({ products, productClick }) => {
          return (
            <ul className="productsList">
              {products.map((product, index) => (
                <li data-id={product.id} name={product.id} onClick={(e) => productClick(product.id, e)} key={index}>
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
}

export default Products;
