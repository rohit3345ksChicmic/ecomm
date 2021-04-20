import React from 'react';
import Product from './Product';
import './App.css';
class Products extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return(
            <ul className="productsList">
                {this.props.products.map((product,index)=><li onClick={(event)=>{this.props.productClick(event,product.id)}} key={index}><Product 
                id={product.id} 
                name={product.name}
                price={product.text}
                imageUrl={product.imageUrl} /></li>
                )}
            </ul>
        )
    }
}

export default Products;
