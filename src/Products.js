import React from 'react';
import Product from './Product';
class Products extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return(
            <div>
                <h2>Products</h2>
                <Product />
            </div>
        )
    }
}

export default Products;
