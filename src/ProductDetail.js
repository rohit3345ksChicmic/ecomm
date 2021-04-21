import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// var productDetails = {
//   id: 23436741,
//   name: "Timex chronograph watch with silver dial",
//   description:
//     'Watch by <a href="/Men/A-To-Z-Of-Brands/Timex/Cat/pgecategory.aspx?cid=4559"><strong>Timex</strong></a><ul>    <li>Something for your wrist</li><li>Model number: TW2R97900</li>    <li>Mesh strap </li>    <li>Stainless steel bezel</li>    <li>Branded dial</li>    <li>Dash markers</li>    <li>Date window </li><li>Backlight feature for visibility in low-light conditions</li>    <li>Chronograph feature</li>    <li>Analogue quartz movement</li>    <li>Folding clasp</li><li>3ATM – water resistant to 30 metres (100 feet)</li><li>Splash and rain-resistant </li>    <li>Two years manufacturer warranty </li>    <li>Comes in a branded box </li></ul>',
//   brandName: "Timex",
//   imageUrl:
//     "images.asos-media.com/products/timex-chronograph-watch-with-silver-dial/23436741-1-silver",
//   price: "$99.00",
// };
const ProductDetail = (props) => {
  const [product, setProduct] = useState({});
  let { productId } = useParams();
  useEffect(() => {
    fetch(
      "https://asos2.p.rapidapi.com/products/v3/detail?id=" +
        productId +
        "&store=US&sizeSchema=US&lang=en-US&currency=USD",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "a964fd8b5amsh4c7be91c6ef5c16p17bd97jsnafbfe8ea832c",
          "x-rapidapi-host": "asos2.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        let {
          id,
          name,
          description,
          price: {
            current: { value },
          },
        } = data;
        let brandName = data.brand.name;
        let imageUrl = data.media.images[0].url;
        let price = value;
        let productDetails = {
          id,
          name,
          description,
          brandName,
          imageUrl,
          price,
        };
        setProduct(productDetails);
        props.productClick(productDetails);
      })
      .catch((err) => {
        console.error(err);
      });
    //  setProduct(productDetails);
  }, []);
  return (
    <div className="productContainer">
      <div className="leftPane">
        {/* Image and Buy Now, Add to Cart button */}
        <div className="imageContainer">
          <img src={`http://${product.imageUrl}`} alt={product.name} />
        </div>
        {JSON.stringify(product)===JSON.stringify({}) ? null : 
          <div className="btnContainer">
            <button className="btn buyNow">
              <img src="/buyNow.svg" alt="Buy Now" />
              Buy Now
            </button>
            <button className="btn addToCart" onClick={props.addToCart}>
              <img
                src="/shopping-cart-solid.svg"
                width="16"
                height="16"
                alt="Shopping Cart"
              />
              Add to Cart
            </button>
          </div>
        }
      </div>
      <div className="rightPane">
        {/* Product Specifications */}
        <div className="productSpecs">
          <div>
            <h1 className="productName">{product.name}</h1>
            <p className="productBrandName">{product.brandName}</p>
          </div>
          {JSON.stringify(product) === JSON.stringify({}) ? null: <p className="productPrice">{"$"+product.price}</p>}
          <div>
            {JSON.stringify(product) === JSON.stringify({}) ? null : (
              <p className="productDescriptionHeading"> Features: </p>
            )}
            <div
              className="productDescription"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
