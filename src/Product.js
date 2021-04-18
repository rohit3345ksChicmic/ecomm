function Product(props){
    return (
        <div className="product">
            <img className="productImage" src={"http://"+props.imageUrl} alt={props.name} />
            <p>{props.name}</p>
            <span>{props.price}</span>
            
        </div>
    )
}

export default Product;