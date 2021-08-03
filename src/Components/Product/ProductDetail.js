import "./ProductDetail.css";
import Button from "../Button/Button";
import Loader from "../Loader";
import { useParams, withRouter } from "react-router-dom";
import { useEffect } from 'react';
import { addToCart, getProduct, setProduct } from "../../Redux/Actions";
import { useSelector, useDispatch } from 'react-redux';

const ProductDetail = ({ changeModalView, ...props }) => {
  const dispatch = useDispatch();
  let { productId } = useParams();
  
  useEffect(() => {
    document.title = "Product : Flipkart Clone";
  }, []);

  useEffect(() => {
    dispatch(getProduct(productId));

    return () => {
      dispatch(setProduct({}));
    }
  }, [productId]);

  const loading = useSelector(state => state.common.loading);
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const currentUser = useSelector(state => state.auth.currentUser) || {};
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const cart = useSelector(state => state.cart.cart) || {};
  let isProductInCart = false;
  if (isLoggedIn) {
    let cartItems = cart.hasOwnProperty(currentUser.email) ? cart[currentUser.email] : [];
    isProductInCart = cartItems.some(item => item.id === selectedProduct.id);
  }

  return !loading ? (
    <div className="productContainer">
      <div className="leftPane">
        {/* Image and Buy Now, Add to Cart button */}
        <div className="imageContainer">
          <img src={`http://${selectedProduct.imageUrl}`} alt={selectedProduct.name} />
        </div>
        <div className="btnContainer">
          <Button className="btn buyNow" click={() => {}}>
            <img src="/buyNow.svg" alt="Buy Now" />
            Buy Now
          </Button>
          <Button className="btn addToCart" click={isProductInCart ? () => {
            props.history.push('/cart');
          }
            :
            () => {
              if (isLoggedIn) {
                dispatch(addToCart({ userEmail: currentUser.email, product: selectedProduct }));
                props.history.push("/cart");
              }
              else {
                alert("You have to be logged in to add product to cart");
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
            {isProductInCart ? " Go to Cart " : " Add to Cart"}
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
