import React from "react";
import Product from "./Product";
import Loader from "../Loader";
import "../App/App.css";
import { useSelector } from 'react-redux';

function Products() {
  const loading = useSelector(state => state.common.loading);
  const products = useSelector(state => state.product.products);

  return (
    <ul className="productsList">
      {!loading ? (products.length ? products.map((product, index) => (
        <li name={product.id} key={index}>
          <Product
            id={product.id}
            name={product.name}
            price={product.value}
            imageUrl={product.imageUrl}
          />
        </li>
      )) : "Sorry! No Products Found") : <Loader />}
    </ul>
  );
}

export default Products;