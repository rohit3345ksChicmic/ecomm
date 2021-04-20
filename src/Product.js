function Product(props){
    return (
        <div className="product">
            <img className="productImage" src={"http://"+props.imageUrl} alt={props.name} />
            <p className="productName">{props.name}</p>
            <span className="productPrice">{props.price}</span>
        </div>
    )
}

export default Product;