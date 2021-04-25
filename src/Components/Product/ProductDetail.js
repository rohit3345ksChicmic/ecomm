import "./ProductDetail.css";
import { ProductContextConsumer } from "../../Contexts/ProductContext";
import Button from "../Button/Button";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

const ProductDetail = (props) => {
  // const [product, setProduct] = useState({});
  // let { productId } = useParams();
  // useEffect(() => {
  //   fetch(
  //     "https://asos2.p.rapidapi.com/products/v3/detail?id=" +
  //       productId +
  //       "&store=US&sizeSchema=US&lang=en-US&currency=USD",
  //     {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-key":
  //           "9b4394ee82mshf475d552353b7bfp1f8fa5jsn012efe703d93",
  //         "x-rapidapi-host": "asos2.p.rapidapi.com",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       let {
  //         id,
  //         name,
  //         description,
  //         price: {
  //           current: { value },
  //         },
  //       } = data;
  //       let brandName = data.brand.name;
  //       let imageUrl = data.media.images[0].url;
  //       let price = value;
  //       let productDetails = {
  //         id,
  //         name,
  //         description,
  //         brandName,
  //         imageUrl,
  //         price,
  //       };
  //       setProduct(productDetails);
  //       props.productClick(productDetails);
  //     })
  //     .catch((err) => {
  //       setProduct(productDetails);
  //       console.error(err);
  //     });

  // }, [productId]);
  return (
    <ProductContextConsumer>
      {({selectedProduct,addToCart}) => {
        return (
          <div className="productContainer">
            <div className="leftPane">
              {/* Image and Buy Now, Add to Cart button */}
              <div className="imageContainer">
                <img src={`http://${selectedProduct.imageUrl}`} alt={selectedProduct.name} />
              </div>
              {JSON.stringify(selectedProduct) === JSON.stringify({}) ? null : (
                <div className="btnContainer">
                  <Button class="btn buyNow">
                    <img src="/buyNow.svg" alt="Buy Now" />
                    Buy Now
                  </Button>
                  <Button class="btn addToCart" click={addToCart}>
                    <img
                      src="/shopping-cart-solid.svg"
                      width="16"
                      height="16"
                      alt="Shopping Cart"
                    />
                    Add to Cart
                  </Button>
                </div>
              )}
            </div>
            <div className="rightPane">
              {/* Product Specifications */}
              <div className="productSpecs">
                <div>
                  <h1 className="productName">{selectedProduct.name}</h1>
                  <p className="productBrandName">{selectedProduct.brandName}</p>
                </div>
                {JSON.stringify(selectedProduct) === JSON.stringify({}) ? null : (
                  <p className="productPrice">{"$" + selectedProduct.price}</p>
                )}
                <div>
                  {JSON.stringify(selectedProduct) === JSON.stringify({}) ? null : (
                    <p className="productDescriptionHeading"> Features: </p>
                  )}
                  <div
                    className="productDescription"
                    dangerouslySetInnerHTML={{ __html: selectedProduct.description }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ProductContextConsumer>
  );
};

export default ProductDetail;
