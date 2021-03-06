import {Link} from 'react-router-dom';
function Product(props){
    return (
        <div className="product">
            <img className="productImage" src={"http://"+props.imageUrl} alt={props.name} />
            <Link to={`/products/${props.id}`}><p className="productName">{props.name}</p></Link>
            <span className="productPrice">{`$${props.price}`}</span>
        </div>
    )
}

export default Product;