import "./ProductDetail.css";
import { ProductContextConsumer } from "../../Contexts/ProductContext";
import Button from "../Button/Button";
import Loader from "../Loader";
import { useParams, withRouter } from "react-router-dom";
import { useEffect } from 'react';
import { addToCart, getProduct, setProduct } from "../../Redux/Actions";
import { useSelector,useDispatch } from 'react-redux';

const ProductDetail = ({changeModalView,...props}) => {
  const dispatch = useDispatch();
  let { productId } = useParams();
  useEffect(() => {
    console.log("did Mount of ProductDetail running");
    dispatch(getProduct(productId));

    return () => {
      dispatch(setProduct({}));
    }
  }, [productId]);
  console.log(props, "props")
  const loading = useSelector(state => state.common.loading);
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const currentUser = useSelector(state => state.auth.currentUser) || {};
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return !loading ? (
    <div className="productContainer">
      <div className="leftPane">
        {/* Image and Buy Now, Add to Cart button */}
        <div className="imageContainer">
          <img src={`http://${selectedProduct.imageUrl}`} alt={selectedProduct.name} />
        </div>
        <div className="btnContainer">
          <Button className="btn buyNow" click={() => {
            props.history.push("/cart");
            console.log("Buy Now Click Hanlder Ran");
          }}>
            <img src="/buyNow.svg" alt="Buy Now" />
            Buy Now
          </Button>
          <Button className="btn addToCart" click={selectedProduct.isInCart ? () => {
            props.history.push('/cart');
          }
            :
            () => {
              if (isLoggedIn) {
                dispatch(addToCart({ userEmail: currentUser.email, product: selectedProduct }));
                props.history.push("/cart");
              }
              else {
                changeModalView();
              }
            }
          }>
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
          <p className="productPrice">{"$" + selectedProduct.price}</p>
          <div>
            <p className="productDescriptionHeading"> Features: </p>
            <div
              className="productDescription"
              dangerouslySetInnerHTML={{ __html: selectedProduct.description }}
            ></div>
          </div>
        </div>
      </div>
    </div>) : <Loader />
};

export default withRouter(ProductDetail);
