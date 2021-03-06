import "./ProductDetail.css";
import { ProductContextConsumer } from "../../Contexts/ProductContext";
import Button from "../Button/Button";
import Loader from "../Loader";
import { useParams, withRouter } from "react-router-dom";

const ProductDetail = (props) => {
  let { productId } = useParams();
  return (
    <ProductContextConsumer>
      {({ selectedProduct, addToCart, productClick }) => {
        if (JSON.stringify(selectedProduct) === JSON.stringify({})) {
          productClick(productId);
        }

        return (
          <div className="productContainer">
            {JSON.stringify(selectedProduct) === JSON.stringify({}) ? <Loader /> : <><div className="leftPane">
              {/* Image and Buy Now, Add to Cart button */}
              <div className="imageContainer">
                <img src={`http://${selectedProduct.imageUrl}`} alt={selectedProduct.name} />
              </div>
              <div className="btnContainer">
                <Button class="btn buyNow">
                  <img src="/buyNow.svg" alt="Buy Now" />
                  Buy Now
                </Button>
                <Button class="btn addToCart" click={selectedProduct.isInCart ? () => {
                  props.history.push('/cart');
                } : addToCart}>
                  <img
                    src="/shopping-cart-solid.svg"
                    width="16"
                    height="16"
                    alt="Shopping Cart"
                  />
                  {selectedProduct.isInCart ? " Go to Cart " : " Add to Cart"}
                </Button>
              </div>
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
            </>}
          </div>
        );
      }}
    </ProductContextConsumer>
  );
};

export default withRouter(ProductDetail);
